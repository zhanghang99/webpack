const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const apiMock = require('webpack-api-mocker');
const entryJSON = require('../entry/entry.json');
const base = require('./webpack.base.js');


let plugins = [];

entryJSON.map((url)=>{
    let name = url.htmlPath;
    plugins.push(
        new HtmlWebpackPlugin({//给html文件打包到指定位置
            template:name.slice(2),
            filename:name.slice(6),
            chunks: [url.jsPath.slice(6,-3)],
            inject:'body',
            hash:true,
        })
    )
})
plugins.push(
    new MiniCssExtractPlugin({//单独打包css文件
        filename:"[name].css",
        chunckFilename:"[id].css",
    })
)

module.exports = merge(base, {
  devtool: 'inline-source-map',//帮助将在打包好的文件里面迅速找出报错的语句位置
  devServer: {
    // before:function(app){
    //     apiMock(app,path.resolve("roadhogrc.mock.js"))
    // },
    contentBase: path.resolve(__dirname, '../src'),
    historyApiFallback:true,
    // hot: true,`
    port:8100,
    proxy:{
        '/api': {
            target:'http://127.0.0.1:8000',
            changeOrigin:true,
            secure:false,// 接受 运行在 https 上的服务
            pathRewrite:{
                "^/api":""
            }
        }
    }
  },
  plugins: plugins
});
