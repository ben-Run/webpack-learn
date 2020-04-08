'use strict'
const path = require('path')
const { CleanWebpackPlugin } =  require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

console.log(process.env.NODE_ENV)
// 先这样简单的抽离
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: process.env.NODE_ENV === 'production' ? '[name]_[chunkhash:8].js' : '[name]_[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: './'
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, '../src')
    },
    extensions : ['*', '.js', '.json', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:[{
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader:'file-loader',
          options: {}
         }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? '[name]_[contenthash:8].css' : '[name]_[hash].css'
    }),
    new VueLoaderPlugin(),
  ]
}