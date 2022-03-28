# React hydrate test

React で`hydrate`時にレンダー結果に差分がある場合は、再レンダリングがされる。
しかし、`dangerouslySetInnerHTML`で追加した DOM の差分は検知がされていない様。

## How to develop

```
$ yarn install
$ yarn run build
$ yarn run start
```

http://localhost:3000 にアクセス
