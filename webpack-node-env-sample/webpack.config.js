const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new webpack.EnvironmentPlugin(['NODE_ENV']), // NODE_ENVが意図した値にならない
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // NODE_ENVにデフォルト値を入れて解決する
    }),
  ],
}
