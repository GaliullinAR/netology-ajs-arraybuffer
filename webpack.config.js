const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCSS = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  modules: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCSS.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCSS({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
