'use strict';
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

Test data:
Data 1: [5, 2, 4, 1, 15, 8, 3] Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
const calcAverageHumanAge = ages =>
  ages
    .map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter(dog => dog >= 18)
    .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
