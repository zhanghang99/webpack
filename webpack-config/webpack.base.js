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
        path: path.resolve(__dirname,'../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/,
                query:{
                    presets:["es2015"]
                }
            },
            { //解析 .html
                test: /\.html$/,
                loader: 'html-loader'
            },
            { 
                test: /\.css$/, 
                use: [
                    'style-loader',
                    'css-loader'
                ] 
            },
            { 
                test: /\.ts$/, 
                use: [
                    'ts-loader'
                ] 
            },
            // { 
            //     test: /\.(png|svg|jpg|JPG|fig)$/, 
            //     use: 'url-loader?limit=1&name=assets/Images/[name].[ext]'
            // },
            // { 
            //     test: /\.(png|svg|jpg|JPG|fig)$/, 
            //     use: "file-loader?name=assets/Images/[name].[ext]" 
            // },
            {
                test: /\.(png|svg|jpg|JPG|fig)$/i,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                exclude: /(node_modules|bower_components)/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: 'assets/Images/[name].[ext]'
                        }
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}