const webpack = require('webpack');

webpack({
  entry: './index.js', output: { filename: 'bundle1.js' }
  // [配置对象](/configuration/)
}, (err, stats) => {
  console.log(stats)
})