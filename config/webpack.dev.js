// Merge our common and dev config files.
const merge = require('webpack-merge'); 
const dotenv = require('dotenv');
const webpack = require('webpack');
const common = require('./webpack.base');

//SCSS test regex 
const scssTest = /\.scss$/;
const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});
console.log('this is the env that is sent to the user', process.env);
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: scssTest,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ],
});