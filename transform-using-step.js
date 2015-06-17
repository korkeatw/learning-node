/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var step = require('step');

step(
    function init() {
        this('hello world!');   
    },
    function transform(text) {
        return text.toUpperCase();
    },
    function addsomething(err, text) {
        if (err) throw err;
        return '### ' + text + ' ###'    
    },
    function print(err, transformed) {
        if (err) throw err; 
        console.log(transformed);   
    }
);
