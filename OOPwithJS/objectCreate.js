'use strict';
/*HIGHLIGHT: Object.create()
- NO prototype property involved 
- NO constructor functions
- NO new operator
- Manually set the prototype of an Object to any other object we want
 */
// NOTE: Create an Object that is the prototype of all the Person objects (object literals)
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  // NOTE: Create Object Programmatically -> Initialize Object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
/* NOTE: Create a Person Object with PersonProto as the prototype
- steven is now an Empty object, and will be linked to PersonProto object -> steven.__proto__ === PersonProto
*/
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
// NOTE: Create Object Programmatically
sarah.init('Sarah', 1979);
sarah.calcAge();
