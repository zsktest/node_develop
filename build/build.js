
var fs=require('fs');
var { join } = require('path');
var buildPath = join(__dirname, '..', 'dist');

require("@babel/core").transformFile("../index.js", {
  presets: ["@babel/preset-env"],
},function(err, result){
  if(err) {
    console.log(err);
    return;
  }
  fs.writeFileSync(buildPath+'/'+result.options.generatorOpts.sourceFileName,result.code);
  console.log('-----打包完成-----');
});