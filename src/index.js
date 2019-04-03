var c = require("babel-polyfill");
// import "babel-polyfill";
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
    console.log(1234);
}
fn1()