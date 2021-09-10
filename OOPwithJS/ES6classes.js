'use strict';
/* HIGHLIGHT: ES6 classes
- Classes are still Functions
- Constructor is automatically called when we create a new object
using NEW operator
- Classes are NOT Hoisted → for both Expression and Declaration
- Classes are also first-class citizens → Means we can pass them into functions, and also return them from functions → because classes are really a special kind of function behind the scenes
- Classes are executed in Strict mode
 */
/* NOTE: Class Expression
const PersonCl = class {};
*/
// NOTE: Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  /* NOTE:
  - Methods write outside the Constructor will be on the Prototype of the Objects
  - NOT on the objects themselves 
  - Methods will be added to .prototype property
  - Instance Methods
  */
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`HEY ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge(); // 41
console.log(jessica.__proto__ === PersonCl.prototype); // true

/*
PersonCl.prototype.greet = function () {
  console.log(`HEY ${this.firstName}`);
};
*/
jessica.greet();
