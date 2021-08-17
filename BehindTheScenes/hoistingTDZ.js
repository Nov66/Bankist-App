'use strict';
// HIGHLIGHT: Variables
// console.log(me);
// console.log(job); TDZ for let and const variable
// console.log(year);

var me = 'Jonas';
// NOTE: Cannot access 'job' before initialization
let job = 'teacher';
const year = 1991;

// HIGHLIGHT: Functions
console.log(addDecl(2, 3)); // NOTE: can only use function declaration
// NOTE: because we use let and const -> Cannot access 'addExpr' before initialization
// console.log(addExpr(2, 3));
// NOTE: because we are calling undefined function
// console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

// NOTE: all products are still deleted even we have 10 products because hoisting
console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // NOTE: numProducts = undefined

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

// NOTE: variable declared with var will create a property on the global window object
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
