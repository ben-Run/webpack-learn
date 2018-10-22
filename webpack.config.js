const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //css 
module.exports = {
    mode: 'development',
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
                test: /\.(png|svg|jpg|gif)$/,
                use:[{
                        loader:'file-loader',
                        options:{
                            name:"[name].[ext]",
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
            name: 'joel',
            time: '20181022'
        })
    ]
}