// If a function exists inside an object, it is called a method

var car = {
  name: "City", // attributes
  color: "Red", // attributes
  startCar: function () {
    // methods or behaviour
    console.log("Car started");
  },
  stopCar: function () {
    // methods or behaviour
    console.log("Car stopped");
  },
};

var name = "";
// Objects
// 1. Object keys can be redeclared
// 2. All data for phone is together
// 3. All phones should have common attributes and behaviour

var phone = {
  name: "Iphone",
  model: "13",
  displaySize: "5 inches",
  price: "1 kidney",
  powerOn: function () {
    console.log("Powering on " + this.name);
  },
  switchOff: function () {},
  activateVoiceAssistant: function () {},
  dialANumber: function () {},
  setAnAlarm: function () {},
};

phone.powerOn();

phone.activateVoiceAssistant();

function test() {
  console.log(test);
}

// WHY do you need to understand about class?

// I want to be able to create multiple phones, but all phones should have a basic structure

// (ES6) 2015 onwards, there is a concept of class in JS

// class name should always begin with Uppercase
// A class is a blueprint for creating objects
class Phone {
  constructor(id, name, color, model, price) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.model = model;
    this.price = price;
  }

  powerOn() {
    console.log("Power on");
  }

  switchOff() {
    console.log("Switch off");
  }

  activateVoiceAssistant() {
    if (this.name === "Samsung") {
      console.log("Samsung voice assistant activated");
    } else if (this.name === "Apple") {
      console.log("Siri activated");
    } else {
      console.log("Voice assistant activated");
    }
  }

  dialANumber(number) {
    console.log("Dialling  " + number + " from " + this.name + " phone");
  }

  setAnAlarm() {
    console.log("Seeting an alarm");
  }
}

// empty object is created = {}
// Inside the class, this = {}
// this obj will be returned
// {name: "Samsung", color: "Red", model: "Galaxy S20", price: 35000}

let samsungPhone = new Phone(1, "Samsung", "Red", "Galaxy S20", 35000);
samsungPhone.activateVoiceAssistant();
samsungPhone.dialANumber(123456789);

let applePhone = new Phone(2, "Apple", "Green", "13", 50000);
applePhone.activateVoiceAssistant();
applePhone.dialANumber(987654321);

// The value of this keyword depends in Javascript

// 1. Alone this refers to the global object - window
// 2. Inside a function (not method) this refers - window
// 3. Inside a method, this refers to the owner of the method (the object which called the method).
// 4. Inside an event handler, this refers to the object that received the event

var a = this; // window

function test() {
  console.log(this);
}
test();

function handleClick(obj) {
  // obj === document.getElementById(....)
  console.log(obj);
}

let person = {
  name: "Satish",
  talent: "Singer",
  age: 32,
  numberOfGrammyawards: 4,
  sing: function () {
    console.log("la la la la la la");
  },
};

person.sing();
person.toString();

// In Javascript, for an object we see methods like toString already existing on the object
// For an array we see methods like map, filter, foreach already existing on array

let arr = [1, 2, 3, 4, 5];

arr.map((el) => el * 2);
