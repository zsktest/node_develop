(()=>{var e={788:(e,o)=>{o.T={getCookie:e=>{let o=e+"=";if("undefined"!=typeof document){let e=document.cookie.split(";");for(let t=0;t<e.length;t++){let n=e[t].trim();if(0==n.indexOf(o))return n.substring(o.length,n.length)}return""}return console.log("无法获取cookie"),""},setCookie:(e,o,t)=>{t||(t=1);var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);var r="expires="+n.toGMTString();"undefined"!=typeof document?document.cookie=e+"="+o+"; "+r:console.log("无法设置cookie")}}}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}(()=>{"use strict";var e=t(788);exports.Test=function(e){console.log(e)},exports.TestB=e=>console.log(e),exports.TestC=async()=>{let e=await 1;console.log(e)},exports.HandleCookie=e.T})()})();