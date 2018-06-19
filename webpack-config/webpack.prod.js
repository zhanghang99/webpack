const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const base = require('./webpack.base.js');
const entryJSON = require('../entry/entry.json');

let plugins = [
    new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {
        root: path.resolve(__dirname, '../'),    // 设置root
        verbose: true
    }),
    new UglifyJSPlugin({
        sourceMap: true
    }),//压缩代码
];
entryJSON.map((url)=>{
    let name = url.htmlPath;
    plugins.push(
        new HtmlWebpackPlugin({
            template:name.slice(2),
            filename:name.slice(6),
            chunks: [url.jsPath.slice(6,-3)],
            inject:'body',
            hash:true,
        })
    )
})

module.exports = merge(base, {
  devtool: 'source-map',//打包后会多出一个map文件
  plugins: plugins
});