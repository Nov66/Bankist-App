'use strict';
/* HIGHLIGHT: Some and Every Method
NOTE:
- Some method: Test Condition
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/* NOTE: includes method can ONLY test for Equality
Condition:
= console.log(movements.some(mov => mov === -130))
*/
console.log(movements.includes(-130)); // true
/*HIGHLIGHT: Some Method
NOTE: can Check a Condition -> return True if one of elements satisfy Condition
*/
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

/*HIGHLIGHT: Every Method
NOTE: can Check a Condition -> Every True if elements in the Array satisfy Condition
*/
console.log(movements.every(mov => mov > 0));

// HIGHLIGHT: Spread CALLBACK
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
console.log(movements.some(deposit));
