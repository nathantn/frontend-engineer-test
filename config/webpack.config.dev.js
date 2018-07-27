const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const buildDirectory = path.resolve(appDirectory, 'build');
const publicDirectory = path.resolve(appDirectory, 'public');

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
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: publicDirectory,
  }
}
