'use strict';
/* HIGHLIGHT: Static Method -> Implement Helper Functions about a class or constructor function
Array.from
- from method is a method that is attached to the Array Constructor
- can NOT use from method on an array -> All arrays do not Inherit this method
- Because NOT on their prototype -> Array.from is a simple function that attached to the Array Constructor
Number.parseInt()
- Another Static method
- Its Static on the Number constructor
- NOT available on numbers
 */
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);
/* NOTE: Add Static Method to Constructor Function
- But jonas can NOT Inherit because it is not on Person Prototype
jonas.hey(); -> jonas.hey is not a function
*/
Person.hey = function () {
  console.log('Hey there');
  console.log(this); // 'this' keyword points to Entire Constructor Function
};
Person.hey();

/* NOTE: Add Static Method to Classes
 */
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  static hey() {
    console.log('Hey there');
    console.log(this); // 'this' keyword points to Entire Class
  }
}
PersonCl.hey();
