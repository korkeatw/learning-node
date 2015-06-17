/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var server = require("http").createServer(serverHandler),
    fs = require("fs"),
    io = require("socket.io").listen(server);

server.listen(8084, function () {
    console.log('Socket.IO app running');
});

io.sockets.on("connection", function(socket){
    fs.watch("log.txt", function(curr, prev){
        fs.readFile("log.txt", "utf-8", function(err, data){
            socket.emit("message", data);
        });
    });
});

function serverHandler(req, res){
    fs.readFile( __dirname + '/index.html' ,function (err, data) {
        if (err) {
            res.writeHead(500, {"content-type" : "text/html"});
            return res.end(err);
        }
        return res.end(data, "utf-8");
    });
}
