'use strict';
/* HIGHLIGHT: Sorting an Array -> Mutate Original Array
 */

// HIGHLIGHT: With Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Marsha'];
console.log(owners.sort()); // NOTE: Original array has been Mutated
console.log(owners);

// HIGHLIGHT: With Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
/* NOTE: Because Sorting method sorting based on the Strings (by Default)
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]
*/
/* NOTE: Solve this by using Compare function (CALLBACK function)
- a, b here means two consecutive number in the array
- Rule of Sort CALLBACK function:
Return < 0 -> A, B -> Keep Order
Return > 0 -> B, A -> Switch Order
*/
/* NOTE: Ascending Order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
*/
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

/* NOTE: Descending Order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
*/
movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]
