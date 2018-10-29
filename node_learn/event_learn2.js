/*
* 以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。
运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。
* */
var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('someevent', (arg1, arg2) => {
    console.log('listener1', arg1, arg2)
})

emitter.on('someevent', (arg1, arg2) => {
    console.log('listener2', arg1, arg2)
})

emitter.emit('someevent', 'arg1someevent', 'arg2someevent');


var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('someevent2', (arg1, arg2) => {
    console.log('listener1', arg1, arg2)
})

event.on('someevent2', (arg1, arg2) => {
    console.log('listener2', arg1, arg2)
})

event.emit('someevent2', 'someevent2arg1', 'someevent2arg2');