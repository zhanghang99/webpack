const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base.js');
const entryJSON = require('../entry/entry.json');

let plugins = [
    new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {//打包前删除原有dist文件
        root: path.resolve(__dirname, '../'),    // 设置root，将webpack.config文件默认的当前假跟目录改到真实跟目录下
        verbose: true
    }),
    // new UglifyJSPlugin({
    //     sourceMap: true
    // }),//压缩代码
    new CopyWebpackPlugin([{//将静态资源复制到打包文件中去
        from: path.resolve(__dirname,'../src/assets'),
        to:path.resolve(__dirname,'../dist/assets'),
        ignore:['.*']
    }]),
    new MiniCssExtractPlugin({//将css单独打包处理
        filename:"[name].css",
        chunckFilename:"[id].css",
    })
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
            minify:{//html文件压缩
                caseSensitive:false,//是否大小写敏感
                removeComments:true,//去除注释
                removeEmptyAttributes:true,//去除空属性
                collapseWhitespace:true,//是否去除空格
            }
        })
    )
})

module.exports = merge(base, {
  devtool: 'source-map',//打包后会多出一个map文件
  plugins: plugins
});