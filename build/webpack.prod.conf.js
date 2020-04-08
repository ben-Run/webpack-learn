'use strict'
const path = require('path')
const webpackBaseConf = require('./webpack.base.conf.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

module.exports =merge(webpackBaseConf, {
  mode: 'production',
  module: {
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'webpack',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: "index.html",
      inject: true
    }),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  }
})