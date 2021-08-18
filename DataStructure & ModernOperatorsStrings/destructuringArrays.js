'use strict';

/* HIGHLIGHT: Destructuring Arrays
a way of unpacking values from arrays or objects into separate variables
*/
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuring array -> unpacking
console.log(x, y, z); // 2 3 4

// TODO: Practice
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprses Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, , secondary] = restaurant.categories; // NOTE: skip elements in the middle
console.log(main, secondary); // Italian Vegetarian

/* NOTE: traditional way to switch the variables in an array
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
*/

// NOTE: Using destructuring to switch variables in the array
[main, secondary] = [secondary, main];
console.log(main, secondary);

// NOTE: Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// NOTE: Nested Array destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// NOTE: Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined
// NOTE: set default values when we get data from API as we do not know the length of the array
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
