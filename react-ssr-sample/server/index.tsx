import express from "express";
import path from "path";
import React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import MyComponent from "../components/MyComponent";
import SSRWrapper from "../components/SSRWrapper";

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  const title = "SSR Counter";

  const initialData = {
    defaultCount: 0,
    title: title,
  };

  const markup = renderToStaticMarkup(
    <SSRWrapper
      initialData={JSON.stringify(initialData)}
      html={renderToString(<MyComponent {...initialData} />)}
    />
  );

  const html = `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <title>${title}</title>
      </head>
      <body>
        ${markup}
        <script src="/client.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Started on port ${port} ...`);
});
