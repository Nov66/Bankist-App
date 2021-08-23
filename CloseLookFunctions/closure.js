'use strict';
/*HIGHLIGHT: Closure
NOTE: 
- Closure happens Automatically in a certain situation
- Closure makes function remember all the existed variables' birthplace
- NOT a tangible JS object
*/
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker); // NOTE: [[Scopes]]: Scopes[3] -> double brackets means this is an Internal Property that we cannot access from the code

// HIGHLIGHT: Closure Examples without returning a function

// Example 1
let f;

const g = function () {
  const a = 23;
  // NOTE: f function still closed over the variable environment of the g function
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46
console.dir(f); // Closure (g) {a: 23}

/*
NOTE: Closure changed when we reassigned function value
Reassign f function
*/
h();
f();
console.dir(f); // Closure (h) {b: 777}

// Example 2: Timer
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// NOTE: Closure has HIGH priority over Scope Chain
const perGroup = 1000;
boardPassengers(180, 3);
