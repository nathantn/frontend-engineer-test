const fs = require('fs');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const buildDirectory = path.resolve(appDirectory, 'build');
const publicDirectory = path.resolve(appDirectory, 'public');

const ExtractScss = new ExtractTextPlugin('./css/style.css');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: buildDirectory,
    filename: './js/bundle.js',
    publicPath: '/static',
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
        use: ExtractScss.extract({
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
    ExtractScss,
  ],
  devServer: {
    inline: true,
    contentBase: publicDirectory,
  }
}
