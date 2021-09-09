'use strict';
/* HIGHLIGHT: Constructor Functions
- Building Objects by using Functions
- Difference between Regular Function is -> Call it with NEW operator
- Construction Function always Start with Capital Letter
- Arrow Function will NOT working in Construction Function -> NO 'this' keyword
*/
const Person = function (firstName, birthYear) {
  // console.log(this); // Person {} -> empty object
  // NOTE: Set Properties to the Object -> Instance Property
  this.firstName = firstName;
  this.birthYear = birthYear;

  /* HIGHLIGHT: NEVER Create Method inside of Construction Function
  - Use Prototypal Inheritance
  - Because if we have thousands of Person Object, it will create thousands copies of this function
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  */
};

/* NOTE: Call it with NEW operator
- Behind scene happens 4 steps
1. New Empty Object created
2. Function is called, 'this' keyword is set to the Newly created Object: this = {}
3. Newly created Object {} is Linked to Prototype
4. Function automatically return {} -> that Empty Object from Beginning 
- jonas, matilda, jack are Instances of Person
*/
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'jay';
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false
