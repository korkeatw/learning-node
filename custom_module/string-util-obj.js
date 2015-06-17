/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var StringUtil = {};

StringUtil = {
    upper: function (text) {
        return text.toUpperCase();
    },
    lower: function (text) {
        return text.toLowerCase();
    }
};

module.exports.StringUtil = StringUtil;
