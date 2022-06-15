// let myArray = [];

// let myArray = Array(150)
//   .fill(0)
//   .map((el) => Math.floor(Math.random() * 150)); //here no. b/w 0 to 150

//   let myArray = Array(150)
//   .fill(0)
//   .map((el) => 5 + Math.floor(Math.random() * 150)); =>here no b/w  5 to 150

// for (var i = 0; i < 150; i++) {
//   myArray[i] = Math.floor(Math.random() * 150);
//or  myArray[i] = Math.ceil(Math.random() * 150);=> Both are same.
// }
// function createtable(arr) {
//   var count = 0;
//   var rows = "<tr>";
//   for (var i = 0; i < arr.length; i++) {
//     rows += "<td>" + arr[i] + "</td>";
//     count++;
//     if (count === 15) {
//       count = 0;
//       rows += "</tr><tr>";
//     }
//   }
//   return rows;
// }
// document.getElementById("tbody").innerHTML = createtable(myArray);

let arr = [];

function createTable(numRows, numColumns) {
  let numOfCells = numRows * numColumns;
  arr = Array(numOfCells)
    .fill(0)
    .map((el) => Math.ceil(Math.random() * numOfCells));

  let htmlString = "";
  for (let i = 0; i < numRows; i++) {
    htmlString += "<tr>";
    for (let j = 0; j < numColumns; j++) {
      htmlString += "<td>" + arr[i * numColumns + j] + "</td>";
    }
    htmlString += "</tr>";
  }
  return htmlString;
}
document.getElementById("tbody").innerHTML = createTable(10, 15);

const sortedEvenNumbers = arr
  .filter((el) => el % 2 === 0)
  .sort((a, b) => a - b);
document.getElementById("sorted").innerHTML = sortedEvenNumbers.toString();

// function maxOrminOfArray(arr, operation) {
//   if (operation === "min") {
//     arr.sort((a, b) => a - b);
//     return arr[0];
//   } else if (operation === "max") {
//     arr.sort((a, b) => b - a);
//     return arr[0];
//   }
// }

// console.log(maxOrminOfArray(arr, "min"));
// console.log(maxOrminOfArray(arr, "max"));

// using Higher order function

// function maxOrminOfArray(arr, sortfn) {
//   arr.sort(sortfn);
//   return arr[0];
// }
// console.log(maxOrminOfArray(arr, (a, b) => a - b));
// console.log(maxOrminOfArray(arr, (a, b) => b - a));

// other way
// function maxOrminOfArray(arr, direction) {
//   arr.sort((a, b) => (a - b) * direction);
//   return arr[0];
// }
// console.log(maxOrminOfArray(arr, 1));
// console.log(maxOrminOfArray(arr, -1));

// function somOrdiffOfElement(arr, N, op) {
//   let sum = 0;
//   for (let i = 0; i < N; i++) {
//     if (op === "-") {
//       sum = sum - arr[i];
//     } else {
//       sum = sum + arr[i];
//     }
//   }
//   console.log(sum);
//   return op === "+" ? sum : -1 * sum;
// }
// somOrdiffOfElement(arr, 15, "+");

// reduce method

// let personObj = [
//   {
//     name: "piyush",
//     numberOfpotato: 45,
//   },
//   {
//     name: "varsh",
//     numberOfpotato: 35,
//   },
//   {
//     name: "didi",
//     numberOfpotato: 25,
//   },
//   {
//     name: "advika",
//     numberOfpotato: 65,
//   },
// ];

// const totalPotato = personObj.reduce((prevValue, currentValue) => ({
//   numberOfpotato: prevValue.numberOfpotato + currentValue.numberOfpotato,
// }));

// console.log(totalPotato);

// imp question

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i); // 6 => 5 times
//     }, 3000);
//   }
// }
// a();

function a() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); // 1,2,3,4,5
    }, 3000);
  }
}
a();
