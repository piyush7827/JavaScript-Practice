// var a = 10;
// var b = 20;
// function sum(a, b) {
//   return a + b;
// }
// var result = sum(a, b);
// console.log(result);

// function differnce(a, b) {
//   return a - b;
// }
// var result = differnce(a, b);
// console.log(result);
// Higher order function takes function as passing   parameter

// var calculate = (a, b, fn) => fn(a, b);

// var sum = calculate(10, 20, (c, d) => c + d);
// console.log(sum); // 30

// var differnce = calculate(100, 20, (c, d) => c - d);
// console.log(differnce); // 80

// var multiply = calculate(10, 20, (c, d) => c * d);
// console.log(multiply); //200

// var division = calculate(100, 20, (c, d) => c / d);
// console.log(division); //5

// // var x = 10;

// function print() {
//   var x = 10;
//   x++;
//   console.log(x);
// }
// print();
// console.log(a);// undefined
// var a = 10;
// console.log(a);// 10

// var a // declaration
// a = 10;// intilization

// hoisting

// 1.
// console.log(x); // Uncaught ReferenceError: x is not defined
// function test() {
//     var x = 10;
//   }

//   test();

// 2.

// function test() {
//   var x;
//   x = 10;
//   console.log(x);//  10
// }

// test();

// 3.
// var x;
// function test() {
//   x = 10;
//   console.log(x);  // 10
// }

// test();

// function test() {
//   // var x;

//   console.log(x); // undefined
//   a = 10;
//   if (a > 5) {
//     var x = 10;
//     // x=10
//   }
//   console.log(x); //10
// }
// test();

// function test() {
//   console.log(x); // undefined
//   var a = 2;
//   if (a > 5) {
//     var x = 10;
//   }
//   console.log(x); //undefined
// }
// test();

// function test(x) {
//   // var x = 15;
//   console.log(x); // 15
//   var a = 10;
//   if (a > 5) {
//     var x = 10;
//   }
//   console.log(x); //10
// }
// test(15);

// function test(x) {
//   // var x = 15;
//   console.log(x); // 15
//   var a = 3;
//   if (a > 5) {
//     var x = 10;
//   }
//   console.log(x); //15
// }
// test(15);

// function test() {
//   var x = 10;
//   if (true) {
//     var x = 20;
//   }
//   console.log(x); //20
// }

// test();

// let a = 10;
// function test() {
//   console.log(a); //10
// }
// test();

// var b = 10;
// function test() {
//   console.log(a); //10
// }
// test();

// let a = 10;
// function test() {
//   console.log(x);//undefined
//   var a = 20;
//   if (a > 20) {
//     var x = 30;
//   }
// }
// test();

// function test() {
//   let x = 20;
//   console.log(x); //20

//   if (a > 20) {
//     x = 30;
//   }
// }
// test();

// function test() {
//   console.log(x); //Uncaught ReferenceError: x is not defined

//   if (a > 20) {
//     let x = 30;
//   }
// }
// test();

// const a = 15;

// console.log(a);

// let a = 10;
// function test() {
//   a = 11;
// }

// // console.log(a); //10

// test();

// console.log(a);//11

// let a = 10;
// function test() {
//   let a = 12;
//   a = a + 11;
//   //   console.log(a); //23
// }

// // console.log(a); //10

// test();

// console.log(a); //10
