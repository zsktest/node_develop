(function() {
  console.log('my first test')
})()

function a(name) {
  console.log('你输入的名字：', name);
}

const b = async (name) => {
  const c = await 1;
  console.log(c);
  console.log('你导出的第二个名字：', name);
} 

exports.Zsktest = a;

exports.Bff = b;