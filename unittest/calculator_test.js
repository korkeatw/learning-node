/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var assert = require('assert'),
    calculator = require('./calculator.js');

describe('Calculator testing', function () {
    var cal;

    before(function () {
        cal = new calculator.Calculator();
    });

    it('2 + 2 should be 4', function (done) {
        assert.equal(cal.add(2, 2), 4);
        done();
    });
});
