'use strict'
const webpackBaseConf = require('./webpack.base.conf.js')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')


module.exports = merge(webpackBaseConf, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress:true,
    port: 8787,
    publicPath: '/'
  },
 
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
    new htmlWebpackPlugin({
      title: 'webpack',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: "index.html",
      inject: true
    }),
  ]
})