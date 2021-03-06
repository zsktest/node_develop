// 测试单文件的babel转化，现在已经改用webpack

// var fs=require('fs');
// var { join } = require('path');
// var buildPath = join(__dirname, '..', 'dist');

// require("@babel/core").transformFile("../index.js", {
//   presets: ["@babel/preset-env"],
// },function(err, result){
//   if(err) {
//     console.log(err);
//     return;
//   }
//   fs.writeFileSync(buildPath+'/'+result.options.generatorOpts.sourceFileName,result.code);
//   console.log('-----打包完成-----');
// });

var webpack = require('webpack');
var path = require('path');

webpack({
  entry: '../index.es6', 
  output: { filename: 'index.js',path: path.resolve(__dirname, '../dist')},//默认在dist目录
  module: {
    rules: [
      {
        test: /\.es6$/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }, 
        exclude: /(node_modules|build|dist|bin)/
      }
    ]
  }, 
  // [配置对象](/configuration/)
}, (err, stats) => {
  if(err) {
    console.log(err);
    return ;
  }
  console.log(stats, 'success')
})