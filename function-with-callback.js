/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var request = require('request'),
    qs = require('qs');

var API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/find';

function report_weather(local, callback) {
    callback(local);
}

report_weather('Klong Luang', function (local) {
    var params = {
            q: local,
            units: 'metric'
        },
        req_options = {
            url: API_ENDPOINT + '?' + qs.stringify(params)
        };

    request(req_options, function (err, res, body) {
        var json = JSON.parse(body).list[0];
        console.log('Weather at %s is %s ํC', json.name, json.main.temp);
    });
});
