'use strict';
/*HIGHLIGHT: Data Transformation: Map, Filter, Reduce
NOTE: 
- JS push to use Functional Programming than just usr For loop
Always needs a External variable when using For Loop
- Map and Filter method: Same as forEach CALLBACK function -> function(value, i, arr)
- Reduce method: First parameter of the Function is Accumulator, then Current value, i, array
Reduce has the Second argument -> Initial value of the Accumulator
*/
console.log('---- Map Method ----');
/* HIGHLIGHT: Map method -> Functional programming
NOTE:
- Give us a Brand NEW array (compare to forEach)
- Apply a CALLBACK function to the original array elements
- forEach method creates Side Effect -> elements one by one
- Map method -> Entire Array not elements one by one
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

/* NOTE: NEW array
const movementsToUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});
*/
// Arrow Function
const movementsToUSD = movements.map(mov => mov * eurToUSD);

console.log(movements);
console.log(movementsToUSD);

// for-Of method -> manually push
const movementUSDFor = [];
for (const movement of movements) {
  movementUSDFor.push(movement * eurToUSD);
}
console.log(movementUSDFor);

const movementsDescriptions = movements.map(
  // NOTE: CALLBACK function called by map method for each of the elements in the movement array
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions); // ["Movement 1: You deposited 200", "Movement 2: You deposited 450", "Movement 3: You withdrew 400", "Movement 4: You deposited 3000", "Movement 5: You withdrew 650", "Movement 6: You withdrew 130", "Movement 7: You deposited 70", "Movement 8: You deposited 1300"]

console.log('---- Filter Method ----');
/* HIGHLIGHT: Filter method -> CALLBACK function
NOTE:
- Pass the Condition and Make it into NEW Array
*/

// Take off the negative value
console.log(movements); //  [200, 450, -400, 3000, -650, -130, 70, 1300]
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits); // [200, 450, 3000, 70, 1300]

// for-Of method -> manually push
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor); // [200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // [-400, -650, -130]

console.log('---- Reduce Method ----');
/* HIGHLIGHT: Reduce method -> Boil down to ONE Single Value
NOTE:
- The First Parameter of Function is Accumulator which accumulating the value we ultimately wan to return
- Reduce has the Second argument -> which is Initial value of the Accumulator
*/
console.log(movements);
/* NOTE: Accumulator -> SnowBall
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
*/
// Arrow function
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance); // 3840

// for-Of method -> manually set Value
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); // 3840

// NOTE: Get Maximum Value
const maximum = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(maximum);
