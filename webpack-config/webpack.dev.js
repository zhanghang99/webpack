const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryJSON = require('../entry/entry.json');
const base = require('./webpack.base.js');


let plugins = [];

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
  devtool: 'inline-source-map',//帮助将在打包好的文件里面迅速找出报错的语句位置
  devServer: {
    contentBase: path.resolve(__dirname, '../src')
  },
  plugins: plugins
});
