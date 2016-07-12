var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './client/pages/calculation/main.js',
  output: {
    path: './lib',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  resolve: {
    alias: {
      client: path.resolve('./client')
    },
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  watch: true
};
