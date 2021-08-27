'use strict';
/* HIGHLIGHT: Flat and Flat Map method -> Used in Nested array
NOTE:
= Remove Nested Array and Flatted array
- Flat method ONLY goes one level deep of Array (default)
- FlatMap = flat method + map method -> But ONLY goes one level deep
= Use flat method if there are more than 1 level deep
 */
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

// NOTE: Array of the array of the array
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]
// NOTE: 2 level deep -> flat(2)
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]
// TODO: Bankist Example
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// HIGHLIGHT: Chaining method

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840
/*
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
*/

// HIGHLIGHT: FlatMap = flat method + map method
const overallBalance2 = accounts
  .flatMap(acc => acc.movements) // NOTE: ONLY goes one level deep
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2); // 17840
