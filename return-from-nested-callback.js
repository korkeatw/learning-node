/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var fs = require('fs'),
    eventEmitter = require('events').EventEmitter;

var BIG_FILE = './data/lexitron.txt';

var emitter = new eventEmitter(),
    found_index = -1;
fs.readFile(BIG_FILE, {encoding: 'utf-8'}, function (err, data) {
    if (err) throw err;
    var words_list = data.split(/[\r\n]+/),
        wanted = 'ก่อ';
    found_index = words_list.indexOf(wanted);
    emitter.emit('print', {word: wanted});
});

emitter.on('print', function (word_obj) {
    if (found_index != -1) {
        console.log('FOUND ' + word_obj.word  + ' at index: ' + found_index);
    } else {
        console.log('NOT FOUND');
    }
});
