let student = {
  name: "Mrigank",
  play: function () {
    console.log("Play");
  },
};

let learner = {
  course: "FED",
};

learner.__proto__ = student;
learner.play();
// End goal is that learner.play() should call play method in student object;

let vehicle = {
  name: "Car",
  start: function () {
    console.log("Car started");
  },
};

let car = {
  name: "Alto",
};

// This is not the recommended way
// __proto__ Developers to not use this property
car.__proto__ = vehicle;
car.start();

let obj = {};

let arr = [1, 2, 3, 4, 5];

arr.newMethod();

// Arrow functions
// Functions
// var vs let/const
// Hoisting
// Objects
// Array - map, filter, foreach
// Closures
// Higher order functions
// Classes
// Prototypal inheritance
