/*
 @author Kokeat W. <khasathan@gmail.com>
*/

var express = require('express'),
    bodyParser = require('body-parser');

var APP_HOST = process.env.host || 'localhost',
    APP_PORT = process.env.port || 8081;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/public/js', express.static(__dirname + '/public/js'));
app.use('/public/css', express.static(__dirname + '/public/css'));
app.use('/public/images', express.static(__dirname + '/public/images'));

app.get('/', function (req, res) {
    res.render('index', {name: 'Alice'});    
});

app.get('/status', function (req, res) {
    res.send('<h1>It\'s works!</h1>');   
});

var server = app.listen(APP_PORT, function () {
    console.log('Express app listening at %s:%s', APP_HOST, APP_PORT);
});
