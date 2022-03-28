import express from "express";
import path from "path";
import React from 'react'
import { renderToString } from "react-dom/server";
import App from "../components/App";

const app = express();
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  const markup = renderToString(<App />);

  const html = `
    <html lang="ja">
      <body>
        <div id="app">${markup}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("listening...");
});
