/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var request = require('request'),
    qs = require('qs');

var API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/find';

function report_weather(local) {
    var params = {
            q: local || 'Bangkok',
            units: 'metric'
        },
        req_options = {
            url: API_ENDPOINT + '?' + qs.stringify(params),
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.39 Safari/537.36'
            }
        },
        deferred = Promise.defer();

    request(req_options, function (err, res, body) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(body);
        }
    });

    return deferred.promise;
}

var reporter = report_weather('Klong Luang');

reporter
.then(function (data) {
    var local = JSON.parse(data).list[0];
    console.log('Weather at %s is %s ํC', local.name, local.main.temp);
})
.catch(function () {
    console.log('reporting error');
});
