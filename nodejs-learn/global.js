console.log(__filename);
// /Users/CK/learn/WebstormProjects/nodejs-learn/global.js




console.log( __dirname );
// /Users/CK/learn/WebstormProjects/nodejs-learn


function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

clearTimeout(t);


function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
//setInterval(printHello, 2000);

console.error("1");

console.trace();

console.time("获取数据");
//
// 执行一些代码
// 执行一些代码
// 执行一些代码
//
console.timeEnd('获取数据');


// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());

