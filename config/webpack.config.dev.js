const fs = require('fs');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const buildDirectory = path.resolve(appDirectory, 'build');
const publicDirectory = path.resolve(appDirectory, 'public');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  mode: 'development',
  output: {
    path: publicDirectory,
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: "css-loader", options: { importLoaders: 1 }
          }, {
            loader: "sass-loader"
          }]
        })
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin('./css/style.css'),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(publicDirectory, 'index.html'),
    }),
  ],
  devServer: {
    inline: true,
    contentBase: publicDirectory,
  }
}
