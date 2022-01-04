# React SSR Sample

| Screenshot                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------- |
| ![screenshot](https://user-images.githubusercontent.com/39073321/128599877-113b5032-5897-4733-848d-5c67347d263a.png) |

React の SSR を試しに触ってみた。

Next.js のソースを読んだ感じ、以下のような実装になっていた。

- Document 部分はサーバー側で`renderToStaticMarkup`している
- App 部分はサーバー側で`renderToString`でレンダリングし、`hydrate`している
- InitialProps は`script`タグ内に JSON として埋め込んでおき、`hydrate`時にサーバー側とブラウザ側での Props によるレンダリングのズレが無いようにしている

このリポジトリもそれにならって、SSR を実装してみた。

## 触ってみる

```
$ yarn install

$ yarn build

$ yarn start

# Access to http://localhost:3000
```
