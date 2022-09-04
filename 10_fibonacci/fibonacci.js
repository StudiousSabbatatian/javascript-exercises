const fibonacci = function(index) {
    if (typeof index === 'string') {
        index = parseInt(index);
    }
    if (index < 0 || index === NaN) {
        return "OOPS"
    }
    if (index === 1 || index === 2) {
        return 1;
    }
    let firstPrevious = 1;
    let secondPrevious = 1;
    for (i = 3; i <= index; i++) {
        current = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = current;
    }
    return current;
};
// Do not edit below this line
module.exports = fibonacci;
