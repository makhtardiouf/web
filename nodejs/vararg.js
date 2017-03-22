/**
 * Variable number of args
 * Test passing an array
 * Makhtar
 */
function sum() {
    var tot = 0;

    for(var i = 0; i < arguments.length; i++) {
        tot += arguments[i];
    }
    return tot;
}

var input = [5, 4, 3, 2, 1];
console.log(sum.apply(this, input));
console.log(sum(1,2,3));