// Callback function => function which accept the callback function will always be a
//                      Higher Order Function. Ex. addeventlistner, setInterval, etc.

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.map((el) => el * 3));

// Database Calls

// 1. Dealing witg async code - using callback

// function getContinents(callback) {
//   let result = [];
//   setTimeout(function () {
//     result = [
//       "Asia",
//       "Eurpoe",
//       "Australia",
//       "South America",
//       "North America",
//       "Africa",
//       "Antartica",
//     ];

//     callback(result);
//   }, 3000);

//   return result;
// }

// // let result = getContinents();
// // console.log(result);

// function callback(result) {
//   console.log(result);
// }
// getContinents(callback);

// Promises
// Promise is an Object which will eventually  return a value or return a error.
// function getcontinentsusingpromise() {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve([
//         "Asia",
//         "Eurpoe",
//         "Australia",
//         "South America",
//         "North America",
//         "Africa",
//         "Antartica",
//       ]);
//     }, 3000);
//   });
//   return promise;
// }
// getcontinentsusingpromise()
//   .then(function (data) {
//     console.log(data);
//   })
//   //   function inside .then call when resolve is called.
//   .catch(function (error) {
//     console.log(error);
//   });

//   async await
// you cannot use await keyword outside an async function

// function getcontinentsusingpromise() {
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve([
//         "Asia",
//         "Eurpoe",
//         "Australia",
//         "South America",
//         "North America",
//         "Africa",
//         "Antartica",
//       ]);
//     }, 3000);
//   });
//   return promise;
// }
// // you cannot use await keyword outside an async function.
// async function getdata() {
//   let result = await getcontinentsusingpromise();
//   console.log(result);
// }

// getdata();

// type of error
// 1. syntax error   => const a;
// 2. reference error
// 3. type error
// 4. range error

// try/catch/finally

let a = 1;
function test() {
  try {
    if (a === 1) {
      console.log("piyush shukla");
    } else {
      console.log("not you");
    }
  } catch (ex) {
    console.log(ex);
  } finally {
    console.log("you can not live without me ");
  }
}

test();
console.log("hello ji");

//    syntax error cannot be try/catch
