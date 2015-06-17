/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

'use strict';

var http = require('http');

var APP_HOST = process.env.host || 'localhost',
    APP_PORT = process.env.port || 8082;

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('Simple Node.js Server');
    res.end();
});
server.listen(APP_PORT, APP_HOST, function () {
    console.log('Simple server listening at %s:%s', APP_HOST, APP_PORT);
});
