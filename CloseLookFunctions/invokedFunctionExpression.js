'use strict';
/* HIGHLIGHT: Immediately Invoked Function Expression (IIFE)
NOTE:
- Sometimes we need a function only executed once
= Function disappear once after it has been called once (create a function only execute once)
- Relates to Async and Await
*/
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

/* NOTE: add Parentheses -> transform a statement into Expression
(function () {
  console.log('This will never run again');
})
*/

/* HIGHLIGHT: IIFE
NOTE: Then immediately call it by add ()
- Data Encapsulation
- Important to hide variables
*/
(function () {
  console.log('This will never run again');
  const isPrivate = 23; // NOTE: encapsulated inside of the this function
})();
// console.log(isPrivate);
(() => console.log('This will never run again'))();
// NOTE: Create a block like this to create Data Privacy or a Scope
{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate); -> isPrivate is not defined
console.log(notPrivate); // 46 -> because we use var
