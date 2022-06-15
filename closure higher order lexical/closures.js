// In normal JS, if I have a function like this,

function sum(a, b) {
  var name = "Mrigank";
  return a + b;
}

sum();
// Then variable name is not accessible after the function has executed

// But when these functions return a function which have a reference to a variable in lexical scope,
// then closures come into picture

// A closure is a function together with its lexical scope
function a() {
  var name = "Mrigank";

  var b = function () {
    console.log(name); // Will this work?
  };

  return b;
}

var b = a();

// b = function() { console.log(name) } + variables used inside the function from the lexical scope
b();

function test1() {
  var x = 10;
  var y = 20;

  return function () {
    return x + 2;
  };
}

var result = test1();
// result = function() { return x + 2 }   + reference to x variable
// Since y is not used inside the function, it will not create a closure around y

result();

// Closures can be used to create powerful functions like these
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

// add5 function(y) { return 5 + y };     // lexical scope x = 5
// add10 function(y) { return 10 + y };    // lexical scope x = 10

add5(2);
add10(12);

// Function Currying

function tripletSum(a, b) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var result = tripletSum(1, 2, 3);
console.log(result);
// f(a,b,c) = f(a)(b)(c)
// f(a,b,c) = f(a,b)(c)

var result2 = tripletSum(1)(2)(3);
console.log(result2);

// tripletSum(1) = function (b) {
//    return function (c) {
//        return a + b + c;
//      };
//    };

// closure is a = 1

// tripetSum(1)(2) function (c) {
//     return a + b + c;
// };

// a = 1, b = 2

// tripletSum(1)(2)(3)  =  6

// + => fontSize keeps on increasing

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

document.getElementById("size-12").addEventListener("click", makeSizer(2));
document.getElementById("size-14").addEventListener("click", makeSizer(4));
document.getElementById("size-16").addEventListener("click", makeSizer(6));

// Event listener
function test() {
  console.log("Clicked");
}

document.getElementById("size-12").addEventListener("click", test);

// 1. Basic Disadvantage

// Garbage collection =>
function sum2(a, b) {
  var name = "Mrigank";
  return a + b;
}

sum2();

// name variable will be garbage collected

function test1() {
  var x = 10;
  var y = 20;

  return function () {
    return x + 2;
  };
}

var result = test1();

//Even if you are not calculating result(), still x variable will be mainted in memory

// To avoid this, assign the value of result to null so that the variable x is garbage collected
// result = null;
