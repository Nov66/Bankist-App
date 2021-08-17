'use strict';

console.log(this); // NOTE: global object -> window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // NOTE: undefined -> in strict mode -> own this keyword
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // NOTE: window -> arrow function does not get own this keyword -> parent scope
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // NOTE: this jonas object -> owner of the method
    console.log(2037 - this.year);
  },
};
jonas.calcAge(); // NOTE: no need to enter 1991

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // NOTE: method borrowing
// NOTE: 20 -> which means 'this' keyword always points to the object that is calling the method, even this method written in the jonas
matilda.calcAge();

const f = jonas.calcAge;
// NOTE: undefined -> because it is now a regular function call, not attached to any object -> no owner
// f();
var firstName = 'Matilda';

const jonasArrow = {
  firstName: 'JONAS',
  year: 1991,
  calcAge: function () {
    console.log(this); // NOTE: this jonas object -> owner of the method
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // NOTE: arrow function does not have its own this keyword -> use parent this keyword -> window object
  },
};
jonasArrow.greet();
console.log(this.firstName); // undefined
