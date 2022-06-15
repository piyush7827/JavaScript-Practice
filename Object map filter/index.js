// function greet(name) {
//   console.log("hello " + name);
//   return "namaste";
// }
// // greet("Piyush");
// var text = greet("Piyush");

// other way to define function

// var greet = function (name) {
//   console.log("hello " + name);
//   return "shukla";
// };
// var text = greet("Piyush");

// Arrow function

// var sum = (a, b) => a * b;

// console.log(sum(5, 6));

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // num % 2=== 0 ? true : false

// var result = isEven(6);

// function isEven(num) {
//   return num % 2 === 0;
// }

// var result = isEven(7);
// console.log(result);

// var isEven = (num) => num % 2 === 0;

// var result = isEven(26);
// console.log(result);

// Object

// var Marks = {
//   ravi: 78,
//   mohan: 45,
//   sohan: 75,
// };

// // // var Mark = Marks.mohan;
// // var result = "First";
// // console.log(result);

// Marks.anuj = 65;
// console.log(Marks);
// Marks["piyush"] = 85;

// Other ways to create Object

// var obj = new Object();

// obj.name = "Piyush";
// obj.age = 28;
// obj.place = "Katni";

// console.log(obj);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);

// for (var i = 0; i < arr.length; i++)
//   if (i == 6) {
//     console.log(arr[i]);
//   }
// forEach

// arr.forEach(function (element) {
//   console.log(element);
// });

// Filter

// var arr = [1, 25, 45, 78, 12, 46, 78, 43, 52, 96, 100, 458];

// function filterfunction(num) {
//   if (num > 50) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var result = arr.filter(filterfunction);
// console.log(result);

// var arr = [1, 25, 45, 78, 12, 46, 78, 43, 52, 96, 100, 458];

// function filterfunction(num) {
//   if (num % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var result = arr.filter(filterfunction);
// console.log(result);

// Map

// var arr = [1, 25, 45, 78, 12, 46, 78, 43, 52, 96, 100, 458];

// var result = arr.map((num) => num * 2);
// console.log(result);

// sort

// var sorted = arr.sort(function (num1, num2) {
//   return num1 - num2;
// });
// console.log(sorted);

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// let myArr = ["Fan", "Camera", 34, null, true];

// Array Methods

// console.log(myArr.length);

// myArr.pop(); // delete last in array
// myArr.push("piyush"); // add last in array

// myArr.shift();//delete start in array
// myArr.unshift("Piyush"); //add start in array
// console.log(myArr);

// map vs filter

// map =>

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.map((el) => el % 2)); //Array(9)
// 0: 1
// 1: 0
// 2: 1
// 3: 0
// 4: 1
// 5: 0
// 6: 1
// 7: 0
// 8: 1
// length: 9

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.map((el) => el % 5)); //(9) [1, 2, 3, 4, 0, 1, 2, 3, 4]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.map((el) => el % 2 === 0)); //
//  (9) [false, true, false, true, false, true, false, true, false]

// filter =>

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.filter((el) => el % 2)); // [1, 3, 5, 7, 9]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.filter((el) => el % 2 === 0)); // [2, 4, 6, 8]

//  slice =>

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.slice(2, 5)); // 3,4,5

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.map((a, b, c) => (b < c.length / 2 ? a * 2 : a * 3))); //(9) [2, 4, 6, 8, 10, 18, 21, 24, 27]

// (a=element,  b=index,  c=original array )
// c.length=8
// c.length/2=4

// let obj = {
//   name: "hello",
//   hello: "namaste",
// };
// console.log(obj[obj.name]); // namaste

// console.log(obj.obj.name); //Uncaught TypeError: Cannot read properties of undefined

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [First, second, third] = arr;

// console.log(First); //1
// console.log(second); // 2
// console.log(third); //3

// let a = 1;
// let b = 2;
// // swap  the a and b value

// [b, a] = [a, b];

// console.log(a); //2

// console.log(b); // 1
