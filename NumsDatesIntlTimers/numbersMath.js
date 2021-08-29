'use strict';
/* HIGHLIGHT: Numbers
NOTE:
- Number in JS always presenting floating number
- Store in a Binary format
 */
console.log(23 === 23.0);
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// HIGHLIGHT: Convert String to Number (replace all Number in Bankist App to +)
console.log(Number('23'));
console.log(+'23'); // NOTE: type coercion -> covert to Numbers

/* HIGHLIGHT: Parsing a Number from a String
NOTE:
- contain Second Parameter: radix -> set to 10 if base 10 -> set to 2 if Binary 
- Global function console.log(Number.parseInt('2.5rem')) -> console.log(parseInt('2.5rem'))
*/
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN -> NOTE: Must start with number
// NOTE: Read Numbers from String
console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseInt('2.5rem')); // 2

/* HIGHLIGHT: Check if is a Number
NOTE:
- isFinite() is the best way to check if a value is a Number, not a String
*/
// NOTE: Check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true
console.log(Number.isNaN(23 / 0)); // false -> infinity is not NaN
// NOTE: Check if value is Number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false
// NOTE: Check if value is Integer
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// HIGHLIGHT: Math and Rounding
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23 -> NOTE: do type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6)) + 1;

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0 ... 1 -> 0 ... (max -min) -> min ... (max - min + min)
console.log(randomInt(10, 20));

/* HIGHLIGHT: Rounding Integers -> always do Type Coercion
NOTE:
- Better use Floor instead of Trunc -> Floor can also deal with Negative Number
*/
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24
// NOTE: Round Up
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
// NOTE: Round Down
console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

/* HIGHLIGHT: Rounding Floating (Decimals) -> always do Type Coercion
NOTE:
- toFixed method always return a String NOT a Number
*/
console.log((2.7).toFixed(0)); // 3 -> String
console.log((2.7).toFixed(3)); // 2.700 -> String
console.log((2.345).toFixed(2)); // 2.35 -> String
console.log(+(2.345).toFixed(2)); // 2.35 -> Number
