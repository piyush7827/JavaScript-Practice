// function diplayMessage() {
// document.getElementById("Greeting").innerHTML ="Hello & Welcome!"
// var h1tag = document.createElement ("h1")
// h1tag.innerText = "Hello & Welcome!";
// document.body.appendChild(h1tag);
// document.getElementById("Greeting").innerHTML="<h1>Hello & Welcome!</h1>"
// document.getElementById("Greeting").innerText="<h1>Hello & Welcome!</h1>"

// var Age = +prompt("Enter your Age (In years)")
// Age = +Age;

// if (Age>=13) {
//         document.getElementById("Greeting").innerHTML="<h1>Welcome to Facebook</h1>";

//     } else {
//         document.getElementById("Greeting").innerHTML="<h1>Watch Pogo</h1>";

//     }
// };
// function Add() {
//   var num1 = +prompt("Enter Your First No.");
//   var num2 = +prompt("Enter Your Second No.");
//   var result = num1 + num2;
//   alert(result);
// }
// function Multiply() {
//   var num1 = +prompt("Enter Your First No.");
//   var num2 = +prompt("Enter Your Second No.");
//   var result = num1 * num2;
//   alert(result);
// }

// function Subtraction() {
//   var num1 = +prompt("Enter Your First No.");
//   var num2 = +prompt("Enter Your Second No.");
//   var result = num1 - num2;
//   alert(result);
// }
// function Division() {
//   var num1 = +prompt("Enter Your First No.");
//   var num2 = +prompt("Enter Your Second No.");
//   var result = num1 / num2;
//   alert(result);
// }

// Declare the function
// function greet(name) {
//   console.log("hello" +  name )

// }
// greet("Piyush");
// function Acceptchallenge() {
//   document.getElementById("Challenge-button").innerHTML = "<h1>challenge Accepted</h1>"

// }

// function performLogin() {
//   var username = document.getElementById("Username").value;
//   var password = document.getElementById("Password").value;
//   var message = document.getElementById("message");

//   if (username === "admin" && password === "admin") {
//     message.innerText = "Login Successful";
//     message.style.color = "green";

//     // document.getElementById("message").style.color = "green";
//     // document.getElementById("message").innerText = "Login Successful";
//   } else {
//     message.innerText = "Enter correct username and password";
//     message.style.color = "red";
//     // document.getElementById("message").style.color = "red";
//     // document.getElementById("message").innerText =
//     //   "Enter correct username and password";
//   }
// }
var currentTurn = "X";
var gameOver = false;
var numberOfgameswinbyX = 0;
var numberOfgameswinbyO = 0;

function play(id) {
  var idString = "" + id;
  // if (!document.getElementById(idString).innerText) {
  //   document.getElementById(idString).innerText = currentTurn;
  var isNotemptycell = document.getElementById(idString).innerText !== "";
  if (isNotemptycell || gameOver) {
    return;
  }
  document.getElementById(idString).innerText = currentTurn;
  calculateWinner();

  if (currentTurn === "X") {
    currentTurn = "O";
  } else {
    currentTurn = "X";
  }
}

function calculateWinner() {
  var cell1Value = document.getElementById("1").innerText;
  var cell2Value = document.getElementById("2").innerText;
  var cell3Value = document.getElementById("3").innerText;
  var cell4Value = document.getElementById("4").innerText;
  var cell5Value = document.getElementById("5").innerText;
  var cell6Value = document.getElementById("6").innerText;
  var cell7Value = document.getElementById("7").innerText;
  var cell8Value = document.getElementById("8").innerText;
  var cell9Value = document.getElementById("9").innerText;

  if (
    (cell1Value !== "" &&
      cell1Value === cell2Value &&
      cell2Value === cell3Value) ||
    (cell4Value !== "" &&
      cell4Value === cell5Value &&
      cell5Value === cell6Value) ||
    (cell7Value !== "" &&
      cell7Value === cell8Value &&
      cell8Value === cell9Value) ||
    (cell1Value !== "" &&
      cell1Value === cell4Value &&
      cell4Value === cell7Value) ||
    (cell2Value !== "" &&
      cell2Value === cell5Value &&
      cell5Value === cell8Value) ||
    (cell3Value !== "" &&
      cell3Value === cell6Value &&
      cell6Value === cell9Value) ||
    (cell1Value !== "" &&
      cell1Value === cell5Value &&
      cell5Value === cell9Value) ||
    (cell3Value !== "" &&
      cell3Value === cell5Value &&
      cell5Value === cell7Value)
  ) {
    gameOver = true;
    document.getElementById("message").innerText =
      "GAME OVER " + currentTurn + "  Won";
    if (currentTurn === "X") {
      numberOfgameswinbyX = numberOfgameswinbyX + 1;
    } else {
      numberOfgameswinbyO = numberOfgameswinbyO + 1;
    }
  }
}
function reset() {
  location.reload();
}
