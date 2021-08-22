'use strict';
/* HIGHLIGHT: High-order Functions & CallBack function
- Create a function that has another function as the Input (Receive function as Input) 
- Create a function that Returns a new function (Return a new function)
- Abstraction -> transformer function is High-level function -> NOT care the details -> low-level functions are abstracted
*/
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// HIGHLIGHT: transformer is High-level (High-order) function -> leave low level details to low-level functions (upperFirstWord and oneWord)
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// HIGHLIGHT: upperFirstWord and oneWord here are CALLBack functions
transformer('JavaScript is the best', upperFirstWord); // NOTE: Only pass this function as Value. NOT calling -> transformer function will call it
transformer('JavaScript is the best', oneWord);

// NOTE: JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5); // NOTE: high5 is Callback function
['jonas', 'martin', 'Adam'].forEach(high5);

// HIGHLIGHT: Return a new function -> useful in Functional Programming
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey'); // NOTE: greeterHey is now a function return function from line 36 - 38
greeterHey('jonas'); // NOTE: Then calling here with name 'jonas' -> this could work because of 'Closure'
greeterHey('steven');
// NOTE: can also call it immediately
greet('Hello')('Liu');

// TODO: Challenge: rewrite greeting function into Arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`); // NOTE: only return online
greetArrow('Hi')('Jonas');
