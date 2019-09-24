'use strict'
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } =  require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

// path
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'development',
  entry: {
    app: './main.js'
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ], // 从右往左开始处理
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: '脱离脚手架',
      template: './index.html'
    }),
    new miniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]
}