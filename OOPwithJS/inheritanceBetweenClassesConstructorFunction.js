'use strict';
/*HIGHLIGHT: Inheritance Between Classes - Constructor Function
 */
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  /*NOTE: 
  Person(firstName, birthYear);
  - this would NOT work this is Regular Function call
  - So 'this' keyword points to Undefined
  */
  Person.call(this, firstName, birthYear);

  this.course = course;
};

//NOTE: Linking Prototype
Student.prototype = Object.create(Person.prototype);

console.log(Student.prototype); //Person {}

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'computer science');
console.log(mike);
mike.introduce();
mike.calcAge(); // 17

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
