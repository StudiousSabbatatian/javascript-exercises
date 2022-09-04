const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((runningtotal, current) => runningtotal + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((runningproduct, current) => runningproduct * current, 1)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let returnVal = 1;
  for (i = number; i >= 1; i--) {
    returnVal = returnVal * i;
  }
  return returnVal
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
