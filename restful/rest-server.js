/*
* @author Kokeat W. <khasathan@gmail.com>
*/

var restify = require('restify');

var APP_HOST = process.env.host || 'localhost',
    APP_PORT = process.env.port || 8080;

var server = restify.createServer({
    name: 'myservice',
    version: '1.0.0'    
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/', function (req, res, next) {
    res.end('Welcome to my service.');
    return next();    
});

server.get('/echo/:name', function (req, res, next) {
    res.json({
        'status': 'success',
        'message': 'Hello, ' + req.params.name    
    });
    res.end();
    return next();    
});

server.listen(APP_PORT, APP_HOST, function () {
    console.log('%s listening at %s', server.name, server.url);    
});
