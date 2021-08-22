'use strict';
/* HIGHLIGHT: Set 'this' keyword Manually and WHY
- Call and Apply Method -> Bind
 */
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // = book: function ()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Shengyan Liu');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // NOTE: it is function now not method -> COPY
/* NOTE: Regular function call -> this keyword points to Undefined
book(23, 'Sarah Williams'); // Cannot read property of Undefined -> NOT work
*/
/* HIGHLIGHT: CALL Method
NOTE:
- Manually set 'this' keyword -> function.call()
- Call the book function with 'this' keyword set to eurowings
*/
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Sonya Wang');
console.log(swiss);

/* HIGHLIGHT: APPLY Method -> NOT used in Modern JS
NOTE:
- Does NOT receive a list of arguments after 'this' keyword
- Instead, take an Array of the arguments
- Can use CALL method by using spread operator
 */
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// NOTE: Prefer use CALL method and spread elements
book.call(swiss, ...flightData);

/* HIGHLIGHT: **BIND Method -> First arguments of bind is 'this' keyword
NOTE:
- Manually set 'this' keyword 
- Does NOT immediately call the function 
- Instead, Return a new function where 'this' keyword is Bind
- Bind gives a NEW function
*/
// CALL method: book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(23, 'Steven Williams');
bookLX(23, 'Steven Williams');

/*NOTE: Can also use BIND create other function with certain arguments
- Partial Application: part of arguments of the original functions are already applied (set)
*/
const bookEW23 = book.bind(eurowings, 23); // NOTE: book function with 23 predefined
bookEW23('Jonas S');
bookEW23('Martin Cooper');

// HIGHLIGHT: BIND Method with Event Listeners
lufthansa.planes = 300;
console.log(lufthansa);
lufthansa.buyPlane = function () {
  console.log(this); // NOTE: 'this' keyword points to button element because addEventListener is calling the function

  this.planes++;
  console.log(this.planes); // NaN
};
// lufthansa.buyPlane(); -> 301 -> because here 'this' keyword points to lufthansa
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // NOTE: So we need to points to lufthansa by using BIND method

/* HIGHLIGHT: Partial Application -> We can Preset parameters
NOTE:
- Order of arguments is important
- The argument you want to Preset must be first one
*/
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

/* NOTE: we do NOT care 'this' keyword here, so just use NULL
equal to addVAT = value => value + value * 0.23
*/
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123

// TODO: Challenge -> one function inside other function
const addTaxRate = rate => {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
