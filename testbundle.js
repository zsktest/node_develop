const  { HandleCookie, Test, TestB, TestC } = require('./dist/index.js');

console.log(HandleCookie);

Test("fsd");
TestB("fdsfds");
TestC();

HandleCookie.getCookie('zk');
