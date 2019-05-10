const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //css 
module.exports = {
    // mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].bundle.js' // 多入口时是需要不同的名称 所以这个name 是一个占位符
    },
    // local server
    devServer:{
        contentBase:'dist',
        hot: true,
        compress: true,
        port:'8081'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ 
                    fallback: "style-loader", 
                    use: "css-loader",
                    publicPath:'../' //解决css背景图的路径问题
                })
            },
            {
                test:/\.scss$/,
                // sass文件分离
                use: ExtractTextPlugin.extract({
                    use:[{
                    loader:'css-loader'
                    },{
                    loader:'sass-loader'
                    }],
                    fallback:'style-loader'
                    })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[{
                        loader:'file-loader',
                        options:{
                            name:"[name].[ext]", // ext: 后缀
                            outputPath: './img/' // 
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            template: './src/index.html', //指定要打包的html路径和文件名
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("./css/[name]-[hash].css"), // css 打包成文件
        new webpack.DefinePlugin({
            name: 'Joel',
            time: new Date().toLocaleString()
        })
    ],
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 300,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 1,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
}