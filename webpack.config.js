'use strict'
const path = require('path')

// path
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  }

}