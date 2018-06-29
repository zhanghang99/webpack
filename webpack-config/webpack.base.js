const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const entryJSON = require('../entry/entry.json');

let entry = {};
entryJSON.map((url)=>{
    let name = url.jsPath.slice(6,-3)
    entry[name] = url.jsPath;
})

module.exports = {
    entry: entry,
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname,'../dist'),
        // publicPath:'/dist/css'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/,
                // query:{
                //     presets:["es2015"]
                // }
            },
            { //解析 .html
                test: /\.html$/,
                exclude:/node_modules/,
                loader: 'html-loader'
            },
            { 
                test: /\.css$/, 
                exclude:/node_modules/,
                use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
                // loader: ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
                // loader:'style!css!sass'
            },
            { 
                test: /\.ts$/, 
                use: [
                    'ts-loader'
                ] 
            },
            // {
            //     test: /\.(png|svg|jpg|JPG|fig)$/i,
            //     use:[
            //         'file-loader'
            //     ]
            // },
            {
                test: /\.(png|jpg|gif)$/i,
                exclude:/node_modules/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'assets/Images/[name].[ext]'
                        }
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude:/node_modules/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                exclude:/node_modules/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                exclude:/node_modules/,
                use: [
                    'xml-loader'
                ]
            },
            // {
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     exclude:/node_modules/,
            //     use: [
            //         'eslint-loader'
            //     ]
            // }
        ]
    }
}