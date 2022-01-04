'use strict';

const functions = require('firebase-functions');
const express = require('express');
const line = require('@line/bot-sdk');
const axios = require('axios');

const config = {
  channelSecret: functions.config().linemessaging.channelsecret,
  channelAccessToken: functions.config().linemessaging.channelaccesstoken
};

const app = express();

app.post('/callback', line.middleware(config), (req, res) => {
  console.log(req.body.events);
  Promise.all(req.body.events.map(handleEvent))
    .then(result => res.json(result))
    .catch(error => console.log('Error: ' + error));
});

const client = new line.Client(config);

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const response = await axios.get(
    'https://chatbot-api.userlocal.jp/api/chat',
    {
      params: {
        key: functions.config().userlocal.apikey,
        message: event.message.text
      }
    }
  );

  let message = '';
  if (response.data.status === 'success') {
    message = response.data.result;
  } else {
    message =
      '【エラーが発生しました】\
      管理者にお知らせ下さい。\
      \
      管理者のTwitter\
      https://twitter.com/hntkaaau';
    console.error(new Error('Error: response => ' + response));
    console.error(new Error('Error: event.message => ' + event.message));
  }
  const echo = { type: 'text', text: message };

  return client.replyMessage(event.replyToken, echo);
}

exports.app = functions.https.onRequest(app);
