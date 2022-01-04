webpackでNODE_ENVを使う際に、

```js
webpack.EnvironmentPlugin(['NODE_ENV'])
```

を使うと、環境変数に`NODE_ENV`が設定されていないとき、

```js
mode: process.env.NODE_ENV || 'development',
```

の`mode`で、`NODE_ENV`が`development`になるかと思いきや、`undefined`になってしまう。

そこで、

```js
new webpack.EnvironmentPlugin({
  NODE_ENV: 'development',
}),
```

のように、`NODE_ENV`のデフォルト値を`development`に設定し、環境変数に`NODE_ENV`が設定されていないときは、`development`になるようにする。

すると、`NODE_ENV`が`undefined`にはならず、`development`になってくれる。
