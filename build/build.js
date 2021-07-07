
var fs=require('fs');
const { join } = require('path');
const buildPath = join(__dirname, '..', 'dist');

require("@babel/core").transformFile("../index.js", {
  presets: ["@babel/preset-env"],
},function(err, result){
  console.log(result);
  fs.writeFileSync(buildPath+'/'+result.options.generatorOpts.sourceFileName,result.code);
});