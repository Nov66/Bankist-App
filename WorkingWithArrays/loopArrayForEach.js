'use strict';
/*
HIGHLIGHT: forEach Method to Loop an Array
NOTE:
- You can NOT break out forEach Loop -> continue and break statement do NOT work
- If want to break out the Loop -> Use for-of Loop
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; // positive -> deposit, negative -> withdrawn
//for-of Method
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  // NOTE: for-Of way to access the counter
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- forEach -----');
/*HIGHLIGHT: forEach Method -> High-order Function which needs a CALLBACK function to tell what to do
NOTE:
- Can access to the counter by add two more Parameters in function
- Order of Parameters is Important !!
- First Parameter must be the Current Element
- Second Parameter must be the Current Index
- Third Parameter must be the Entire Array that are Looping over
*/
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)

console.log('----- forEach with Maps -----');
// HIGHLIGHT: forEach works with Maps
const currencies = new Map([
  ['USD', 'United States dollar'], // NOTE: One Entry of the Map -> key, value
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // USD: United States dollar
});

console.log('----- forEach with Sets -----');
/* HIGHLIGHT: forEach works with Sets
NOTE: 
- key is same as value -> because Sets do NOT have keys and indexes
- Simply omit the value by write '_' -> means Throw away value -> Unnecessary
- Both use value
*/
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`); // USD: USD
});
