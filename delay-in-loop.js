/*
 * @author Korkeat W. <khasathan@gmail.com>
 */

var MAX  = 10,
    DELAY = 1000; // 1 second

var start = 0;

(function looper(n) {
    setTimeout(function () {
        console.log(n);
        n++;
        if (n < MAX) {
            looper(n);
        }
    }, DELAY);
}(start));
