const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
        return "ERROR";
    }
    if (a > b) {
        var big = a, small = b;
    } else {
        var big = b, small = a;
    }
    let sum = 0;
    for (i = small; i <= big; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
