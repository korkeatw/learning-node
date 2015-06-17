/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var fs = require('fs');

var BIG_FILE = './data/lexitron.txt';

fs.readFile(BIG_FILE, {encoding: 'utf-8'},  function (err, data) {
    if (err) throw err;
    console.log(data.split(/[\r\n]+/).length);
});

console.log('Read big file');

