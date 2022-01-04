const $ = require('jquery'); // jQueryを読み込む

$(function() {
  $('#btn').click(function() {
    // ボタンがクリックされたとき、
    $('#msg').slideDown(); // メッセージが出てくる
  });
});
