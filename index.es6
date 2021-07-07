
//const handleCookie = require('./src/cookie.js');
import { HandleCookie }from './src/cookie.es6'

function test(name) {
  console.log(name);
}

const testB = (name)=>console.log(name);

const testC = async ()=>{
  let c = await 1
  console.log(c);
}

exports.Test = test;

exports.TestB = testB;

exports.TestC = testC;

exports.HandleCookie = HandleCookie;


