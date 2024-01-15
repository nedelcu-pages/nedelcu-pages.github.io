"use strict";

// Callback functions

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }

// const transformer = function(str, fn) {
//     console.log(`Transormed string: ${fn(str)}`)
//     console.log(`Transformed by: ${fn.name}`)
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)

// Functions returning functions

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

// const nameFn =  greet('Hey')
// nameFn('Luana')
// nameFn('Andrei')
// greet('Hello')('Luana')

// // Challenge

// const addTax = (rate, value) => value + value * rate
// const addVat = addTax.bind(null, 0.23)

// const addVat2 = function(rate) {
//     return function(value) {
//         return value + value * rate
//     }
// }

// const calculatedVal = addVat2(0.23)
// console.log(addVat(100))
// console.log(calculatedVal(100))

// Challenge

// const poll = {
//     question: 'What is your favorite programming language',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`))

//         if(answer >= 0 && answer <=  3) {
//             this.answers[answer]++
//         } else {
//             alert('You need to choose from the options')
//         }

//         this.displayResults()
//     },
//     displayResults(type = 'array') {
//         if(type === 'array') {
//             console.log(this.answers)
//         } else {
//             console.log(`Poll results are ${this.answers.join(', ')}`)
//         }
//     }
// }

// poll.registerNewAnswer()

// document.querySelector('#poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// const testData = {
//     answers: [5, 2, 3]
// }
// const data = poll.displayResults.bind(testData)
// data('array')
// data('string')

// Closures

// const secureBooking = function() {
//     let passengerCount = 0;

//     return function() {
//         passengerCount++
//         console.log(passengerCount)
//     }
// }

// const booker = secureBooking()
// booker()
// booker()
// booker()

// Challenge

// (function() {
//     const paragraph = document.querySelector('#paragraph')
//     paragraph.style.color = 'red';

//     document.body.addEventListener('click', function() {
//         paragraph.style.color = 'blue';
//     })
// })();

// OOP

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const luana = new Person("Luana", 1994);
// console.log(luana);

// Prototypes

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// luana.calcAge();

// console.log(luana.__proto__);
// console.log(luana.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(luana));
// Person.prototype.species = "Homo Sapiens";

// console.log(luana.hasOwnProperty("firstName"));
// console.log(luana.hasOwnProperty("species"));

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.unique());

// Challenge

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);

// car1.accelerate();
// car2.break();

// ES6 Classes

// class expression
// const Person = class {

// }

// class declaration

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) {
//       this._fullName = name;
//     } else {
//       alert("This is not a full name");
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log("Hey there 👋");
//   }
// }

// const jessica = new Person("Jessica Davis", 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// Person.hey();

// Getters and setters

// const account = {
//   owner: "jonas",
//   movenents: [200, 530, 120, 300],

//   get latest() {
//     return this.movenents.at(-1);
//   },

//   set latest(mov) {
//     this.movenents.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.latest);

// Object.create Classes

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const setevn = Object.create(PersonProto);
// setevn.firstName = "Steven";
// setevn.birthYear = 2002;
// setevn.calcAge();
// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();

// Challenge

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   set speedUS(val) {
//     this.speed = val * 1.6;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }

// const ford = new Car("Ford", 120);

// ford.speedUS = 50;
// console.log(ford.speedUS);
// console.log(ford.speed);

// Inheritance

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`Hello my name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");
// mike.introduce();
// console.dir(Student.prototype.constructor);
// mike.calcAge();

// Challenge

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(this.charge);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log("speed", this.speed);
//   console.log("charge", this.charge);
// };

// const ford = new Car("Ford", 120);
// const tesla = new EV("Tesla", 120, 23);

// ford.accelerate();
// ford.break();
// tesla.accelerate();
// tesla.break();

//Inheritance in ES6 classes

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) {
//       this._fullName = name;
//     } else {
//       alert("This is not a full name");
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log("Hey there 👋");
//   }
// }

// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I am ${2037 - this.birthYear}`);
//   }
// }

// const mike = new Student("Mike David", 2020, "Computer Science");

// mike.introduce();
// mike.calcAge();

// Inheritance Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const setevn = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);

// jay.init("Jay", 2020, "Architecture");
// jay.calcAge();
// jay.introduce();

// Encapsulation

// class Account {
// Public field
// locale = navigator.language;

// Private field
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//   }

//   getMovements() {
//     return this.#movements;
//   }

//   deposit(amount) {
//     this.#movements.push(amount);
//     return this;
//   }

//   withdraw(amount) {
//     this.deposit(-amount);
//     return this;
//   }

//   requestLoan(amount) {
//     if (this.#approveLoan()) {
//       this.deposit(amount);
//       console.log("Loan approved");
//       return this;
//     }
//   }

//   #approveLoan() {
//     return true;
//   }

//   static helper() {
//     console.log("Helper");
//   }
// }

// const acc1 = new Account("Jonas", "EUR", 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(200);

// Account.helper();

// console.log(acc1.#movements);

// Chaining

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

// Challenge

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   set speedUS(val) {
//     this.speed = val * 1.6;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//     return this;
//   }
// }

// class EV extends Car {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} runs with ${this.speed} km/h with a charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }

//   chargeBattery(percentage) {
//     this.#charge = percentage;
//     return this;
//   }
// }

// const ford = new Car("Ford", 120);
// const tesla = new EV("Tesla", 120, 23);
// tesla.accelerate().brake().chargeBattery(90).accelerate();
// console.log(tesla.speedUS);

// Create promises

const lottery = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening 🔮");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You won 💵");
    } else {
      reject(new Error("You lost 💔"));
    }
  }, 2000);
});

lottery.then((res) => console.log(res)).catch((err) => console.error(err));

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(3)
  .then(() => {
    console.log("Wait is over");
    return wait(1);
  })
  .then(() => console.log("Haha was jk"));
