# node 工具包发布与开发
1. npm init 
用该命令生成package.json
生成如下： 
```json
 {
  "name": "zsk_tool_bff",
  "version": "1.0.1",
  "description": "",
  "main": "index.js",
  "bin": {
    "zsk_tool_bff": "bin/zsk_tool_bff.js"
  },
  "author": "liux_zsk",
  "license": "ISC"
}

```
上述中，bin: {"zsk_tool_bff": 'bin/zsk_tool_bff.js'}为后续添加，为让命令可以直接在node中能调用执行使用，这个后续会继续补充。
  
2. 编写index.js

```javascript
(function() {
  console.log('my first test')
})()

function a(name) {
  console.log('你输入的名字：', name);
}

var b = function(name) {
  console.log('你导出的第二个名字：', name);
} 

exports.Zsktest = a;

exports.Bff = b;
	
```
3. 进行npm publish发布。

在npm publish之前需要在npm官网注册账号，并且完成邮箱验证，然后使用我们的npm login命令进行登陆，登陆完就可以直接使用npm publish进行发布,或者npm publish --access public

4. 测试发布完包是否可使用 
命令： npm install zsk_tool_bff 进行安装包

因为我们在第一步的时候使用了bin,所以，我们可以使用npx zsk_tool_bff进行执行。输入如下：
```c
zsk@zskdeMacBook-Pro node % npx zsk_tool_bff
my first test
```
接下来，我们测试我们exports出来的2个函数，我们编写test.js,如下：
```javascript

var test = require('zsk_tool_bff');
test.Zsktest('zsk');
test.Bff('bff');
```
执行node test.js,输出如下:
```C
zsk@zskdeMacBook-Pro node % node test.js
my first test
你输入的名字： zsk
你导出的第二个名字： bff
```

其中my first test是我引入该包时候输入的内容。