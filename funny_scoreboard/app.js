/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var fs = require('fs'),
    redis = require('redis'),
    finalhandler = require('finalhandler'),
    serveStatic = require('serve-static'),
    server = require('http').createServer(serverHandler),
    io = require('socket.io')(server);

var REDIS_HOST = 'localhost',
    REDIS_PORT = 6379,
    HTTP_HOST = 'localhost',
    HTTP_PORT = 8083;

/*
 * Server handler
 */
server.listen(HTTP_PORT, HTTP_HOST, function () {
    console.log('Funny Scoreboard listening at %s:%s', HTTP_HOST, HTTP_PORT);
});

function serverHandler (req, res) {
    var done = finalhandler(req, res),
        serve = serveStatic("./");

    serve(req, res, done);
}

/*
 * Redis connection
 */
var client = redis.createClient(REDIS_PORT, REDIS_HOST),
    sub = redis.createClient(REDIS_PORT, REDIS_HOST),
    pub = redis.createClient(REDIS_PORT, REDIS_HOST);

client.on('error', function (err) {
    if (err) throw err;
});

/*
 * Websocket listener
 */
io.on('connection', function (socket) {
    sub.subscribe('score');

    client.hgetall('score', function (err, score) {
        socket.emit('update score', score);
    });

    sub.on('message', function (chan, msg) {
        if (chan === 'score') {
            socket.emit('update score', {score: score});
        } else {

        }
    });

    socket.on('select team', function (cheer) {
        client.srem('fcb', cheer.user);
        client.srem('juve', cheer.user);
        client.sadd(cheer.team, cheer.user);
        sub.subscribe(cheer.team);
    });

    socket.on('disconnect', function() {
        sub.quit();
    });
});
