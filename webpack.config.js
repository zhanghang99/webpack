const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'index':'./src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
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
            {
                test: /\.(png|svg|jpg|JPG|fig)$/,
                use:[
                    'file-loader'
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
    },
    devtool: 'inline-source-map',//帮助将在打包好的文件里面迅速找出报错的语句位置
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'output Management'
        })
    ]
}