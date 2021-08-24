'use strict';
// HIGHLIGHT: Array methods are the function of the object
let arr = ['a', 'b', 'c', 'd', 'e'];

// HIGHLIGHT: Slice Method -> return a NEW array, NOT mutate original one
console.log(arr.slice(2)); // ["c", "d", "e"]
console.log(arr.slice(2, 4)); // ["c", "d"]
// NOTE: Take from the last element
console.log(arr.slice(-2)); // ["d", "e"]
console.log(arr.slice(1, -2)); // ["b", "c"]
// NOTE: Can Create a Shallow Copy of an Array
console.log(arr.slice()); // got the SAME array ->  ["a", "b", "c", "d", "e"]
console.log([...arr]); // Can also use Spread Operator

// HIGHLIGHT: Splice Method -> Mutate Original Array
// console.log(arr.splice(2)); // ["c", "d", "e"]
arr.splice(-1); // NOTE: Can use to Remove last elements -> ["a", "b", "c", "d"]
arr.splice(1, 2); // ["a", "d"] -> delete b, c NOTE: the Second Parameter is the Number of Elements we want to delete
console.log(arr); // ["a", "b"] -> Splice delete the Extracted elements

//HIGHLIGHT: Reverse Method -> Mutate Original Array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ["f", "g", "h", "i", "j"]
console.log(arr2); // ["f", "g", "h", "i", "j"]

//HIGHLIGHT: Concat Method -> NOT mutate Original array
const letters = arr.concat(arr2); // Concat arr + arr2
console.log(letters); // -> ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
console.log([...arr, ...arr2]); // Same as concat

// HIGHLIGHT: Join Method -> NOT mutate Original Array
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
