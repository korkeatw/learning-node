/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var Calculator = function() {};

Calculator.prototype.add = function (x, y) {
    return x + y;
};

Calculator.prototype.subtract = function (x, y) {
    return x - y;
};

module.exports.Calculator = Calculator;
