"use strict";

(function () {
  console.log('my first test');
})();

function a(name) {
  console.log('你输入的名字：', name);
}

var b = function b(name) {
  console.log('你导出的第二个名字：', name);
};

exports.Zsktest = a;
exports.Bff = b;