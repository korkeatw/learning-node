/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var StringUtil = function () {};

StringUtil.prototype.upper = function (text) {
    return text.toUpperCase();
};

StringUtil.prototype.lower = function (text) {
    return text.toLowerCase();
};

module.exports.StringUtil = StringUtil;
