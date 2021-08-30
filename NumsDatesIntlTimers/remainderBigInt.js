'use strict';
/* HIGHLIGHT: Remainder Operator
NOTE: If you want to do sth every Nth time
 */
console.log(5 % 2); // 1
console.log(8 % 3); // 2

console.log(7 % 2); // 1
console.log(6 % 2); // 0

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

const labelBalance = document.querySelector('.balance__value');

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0 2 4 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0 3 6 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

/* HIGHLIGHT: BigInt -> introduce in ES2020
NOTE: 
- Numbers are represent internally 64 bits
- ONLY 53 bits to store Number
- Can NOT mix bigint with regular number (must use BigInt(num))
 */
console.log(2 ** 53 - 1); // NOTE: Biggest number JS can represent
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 4); // Unsafe -> sometimes it works

// NOTE: BigInt
console.log(4294798237489273894729837489273840n);
console.log(BigInt(42947982374));

// NOTE: Operation
console.log(10000n + 10000n);
console.log(47283642673846827n * 10000000n);
// console.log(Math.sqrt(16n)); -> NOT working

// NOTE: Can NOT mix bigint with regular number
const huge = 891273987129847819274918n;
const num = 23;
console.log(huge * BigInt(num));

// NOTE: Exceptions 1: Logical Operator
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == 20); // true -> do type coercion for regular

// NOTE: Exception 2: String Concatenation -> Convert to String
console.log(huge + ' is Really Big'); // 891273987129847819274918 is Really Big

// NOTE: Divisions
console.log(10n / 3n); // 3n -> Return the Closest BigInt (cut off decimal part)
console.log(10 / 3);
