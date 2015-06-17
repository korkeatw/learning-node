/*
* @author Kokeat W. <khasathan@gmail.com>
*/

var restify = require('restify');

var client = restify.createJsonClient({
    url: 'http://localhost:8080',
});

client.get('/echo/kor', function (err, req, res, body) {
    if (err) {
        console.log(err);
        return;    
    }

    console.log(body);
});
