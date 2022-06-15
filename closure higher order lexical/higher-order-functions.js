// A function that accepts and/or returns another function is called a higher order function

let arr = [1, 2, 3, 4, 5];

arr.map((el) => el * 2);

// Higher order functions can be reused to perform multiple operations
// It helps to reduce the code duplication

function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function power(a, b) {
  return a ** b;
}

// a = 1
// b = 2
// fn = function (a, b) {
//  return a + b;
// }

// HIGHER ORDER FUNCTION => SYNTEX

function calculate(a, b, fn) {
  return fn(a, b);
}

var result1 = calculate(1, 2, (a, b) => a ** b);
var result2 = calculate(1, 2, function (a, b) {
  return a - b;
});

var result3 = calculate(1, 2, function (a, b) {
  return a % b;
});

// a % b
