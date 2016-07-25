var fs = require("fs");

fs.readFile('input.txt',function (err,data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
})


var data = fs.readFileSync('./input.txt');
console.log("同步读取: " + data.toString());



fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }


    console.log("文件打开成功!");
})

fs.stat('input.txt', function (err, stats) {

    console.log(stats);

    console.log(stats.isSocket()); 		//true
})

var buf = new Buffer(1024);

console.log("准备打开已存在的文件！");

fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if (err){
            console.log(err);
        }

        if(bytes >0){
            console.log("1:"+buf.slice(0,bytes).toString())
        }
    })
})