// function changecolour() {
//   const letter = "0123456789abcdef";
//   let colour = "#";
//   for (let i = 0; i < 6; i++) {
//     colour += letter[Math.floor(Math.random() * 16)];
//   }
//   document.body.style.backgroundColor = colour;
// }

// let id = setInterval(changecolour, 500);

// function stopchangecolour() {
//   clearInterval(id);
// }

// closure example

// let x = 100;
// setTimeout(function () {
//   console.log(x); //500
// }, 1000);
// x = 500;

// let x = 100;
// setTimeout(function () {
//   x = 200;
// }, 2000);
// x = 500;

// console.log(x);

// var str = "abcde"[2];
// str = "c"
// b = undefined
// str("c") + b(undefned) =  cundefined

// console.log(str + b); // cundefined
// var b;

// var str = "abcde"[3];
// console.log(str + b); // dundefined
// var b;
