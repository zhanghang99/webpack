const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  devtool: 'inline-source-map',//帮助将在打包好的文件里面迅速找出报错的语句位置
  devServer: {
    // contentBase: 'dist'
    contentBase: path.resolve(__dirname, '../dist')
  }
});
