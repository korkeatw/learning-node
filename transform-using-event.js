/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var eventEmitter = require('events').EventEmitter;

var emitter = new eventEmitter();

emitter.on('init', function (text) {
    text = 'hello world!';
    emitter.emit('transform', text);
});

emitter.on('transform', function (text) {
    text = text.toUpperCase();
    emitter.emit('addsomething', text);
});

emitter.on('addsomething', function (text) {
    text = '### ' + text + ' ###';
    emitter.emit('print', text);   
});

emitter.on('print', function (text) {
    console.log(text);    
});

emitter.emit('init', '');
