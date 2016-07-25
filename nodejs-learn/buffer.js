buf = new Buffer(256);

len = buf.write("www.baidu.com")

// console.log("写入的字节数:" + len);

buf2= new Buffer(26);

for(var i = 0 ;i< 26 ;i++){
    buf2[i] = i+ 97;
}

console.log(buf2.toString('ascii'));
console.log(buf2.toString('utf-8'));
//
console.log(buf2.toJSON().data)

console.log(Buffer.concat([buf,buf2]).toString());

