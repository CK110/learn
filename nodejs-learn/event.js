var events = require('events');

console.log(events.EventEmitter);

var eventEmitter = new events.EventEmitter();


var connectHandler = function connected(){
    console.log("链接成功");

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);


eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');