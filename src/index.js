<<<<<<< HEAD
require("babel-polyfill");
// import "@babel/polyfill";
=======
var c = require("babel-polyfill");
// import "babel-polyfill";
>>>>>>> 3685c39e2da76e18894d53a5cdcd7387d29e7b4d
// import $ from "expose-loader?$!jquery";
//（1）内联loader   expose-loader 暴露到window  
//（2）用webpack 插件给每一个模块注入
//（3）引入不打包 （cdn引入 然后你模块再引入所以打不得时候不需要）
// console.log(window.$,$);
require('./a.css');
let fn = (a) => {
    console.log(a)
};
fn(111);
async function fn1 (){
    console.lo(1234);
}
fn1()