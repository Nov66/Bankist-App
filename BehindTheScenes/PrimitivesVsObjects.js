'use strict';
/* HIGHLIGHT: Primitive types: numbers, string, boolean, 
undefined, null, symbol, BigInt
Objects -> Reference types: object literal, Arrays, Functions
*/

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30 -> age still 30

const me = {
  name: 'Jonas',
  age: '30',
};

const friend = me;
friend.age = 27;
console.log('Friend', friend); // age = 27
console.log('me', me); // age = 27

// HIGHLIGHT: Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// HIGHLIGHT: Reference Types
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};
/* NOTE: this step does not create new object in the HEAP, 
it just another variable in the STACK which holds the reference to the original objects
'marriedJessica' points same memory address as 'jessica' -> two different name with same thing
*/
const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log('before marriage', jessica); // lastName: 'davis'
console.log('after marriage', marriedJessica); // lastName: 'davis'

// marriedJessica = {} NOTE: const -> we cannot change the value to the new memory address

// HIGHLIGHT: Copying Objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
// store in new object
const jessicaCopy = Object.assign({}, jessica2); // NOTE: it only assign the first level -> cannot copy the object inside the object (shallow copy not deep clone)
jessicaCopy.lastName = 'davis';
console.log('before marriage', jessica2);
console.log('after marriage', jessicaCopy);

jessicaCopy.family.push('Mary'); // NOTE: both of objects of family are changed
jessicaCopy.family.push('John');
console.log('before marriage', jessica2);
console.log('after marriage', jessicaCopy);
