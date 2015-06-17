/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var stringUtil = require('./string-util-obj.js').StringUtil;

// If implement with function style you MUST use 'new' keyword
var util = stringUtil,
    text = 'If you smell what The Rock is cookin\'';

console.log(util.upper(text));
console.log(util.lower(text));
