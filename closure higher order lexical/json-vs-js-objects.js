// // JS objects

// var obj = {
//   name: "Mrigank",
//   age: 17,
//   greet: function () {
//     console.log("Hello");
//   },
// };

// // console.log(typeof obj.greet); // "function"

// // JSON
// // 1. Keys will always be in double quotes ""
// // 2. Functions are not allowed as values
// // {"name": "Mrigank"}

// console.log(JSON.stringify(obj));

// var obj1 = JSON.parse({ name: "Mrigank", age: 17 });
// console.log(obj1);

// How does arithmetic work for string operands

function sum(a, b) {
  return a / b;
}
console.log(sum(1, "2")); //0.5

console.log(sum(1, "2a")); //NaN

// If either of the operands is a string

// if + then concatenation happens
// if the string can be converted to a number, then arithmetic operation will happen
// else NaN will be the output

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, "2a")); //12a

// console.log(true + true === 2); //true
// // 1 + 1 ===2
// // 2 === 2 => TRUE

// console.log(true === 2); // false
