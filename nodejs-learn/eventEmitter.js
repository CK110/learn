var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('some_event',function(){
    console.log('some_event 事件触发1');
});

event.on('some_event',function(){
    console.log('some_event 事件触发2');
});
event.on('some_event',function(){
    console.log('some_event 事件触发1');
});

event.on('some_event',function(){
    console.log('some_event 事件触发2');
});
event.on('some_event',function(){
    console.log('some_event 事件触发1');
});

event.on('some_event',function(){
    console.log('some_event 事件触发1');
});

event.on('some_event',function(){
    console.log('some_event 事件触发2');
});
event.on('some_event',function(){
    console.log('some_event 事件触发1');
});

event.on('some_event',function(){
    console.log('some_event 事件触发2');
});
event.on('some_event',function(){
    console.log('some_event 事件触发1');
});


setTimeout(function () {
  event.emit('some_event');
},1000)