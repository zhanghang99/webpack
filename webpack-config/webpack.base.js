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
            }
        ]
    }
}