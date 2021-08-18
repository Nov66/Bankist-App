'use strict';
/* HIGHLIGHT: Spread Operator -> expand an array into all its elements
Unpacking all the array elements at one
can use on all iterables: arrays, map, strings but NOT objects
*/
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// NOTE: Spread Operator -> can use it when we need elements of an array individually
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // 1 2 7 8 9

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprses Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

/* NOTE: Spread operators take all the elements in an array, 
also does not create new variables 
-> only use while values separated by commas
*/
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// HIGHLIGHT:
// copy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy
// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

/* HIGHLIGHT: Iterables: arrays, maps, strings, sets, NOT objects
CANNOT use ... in the template literal, 
because it does not expect 'multiple values separated by comma'
it only expect when we pass argument into a function or when we built a new array
*/
const str = 'Jonas';
const letters = [...str, ' ', 's.'];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "s."]
console.log(...str); // J o n a s

// HIGHLIGHT: Spreading Operators used in the Functions
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // ES6 syntax

// HIGHLIGHT: since 2018, it supports spread Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Jonas' };
console.log(newRestaurant);
// NOTE: Shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
