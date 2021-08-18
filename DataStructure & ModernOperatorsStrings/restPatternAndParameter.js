'use strict';
/* HIGHLIGHT: Rest Patterns -> collect multiple elements and conduct them into an array
Packing them into an array -> opposite of Spreading operator
*/
// HIGHLIGHT: Part 1 Destructuring

//NOTE: SPREAD: on right side of =
const arr = [1, 2, ...[3, 4]];
// NOTE: REST: on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [3, 4, 5] -> create a new array

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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* NOTE: REST patterns must be the last in the destructuring assignment
ONLY ONE rest in the destructuring assignment
*/
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// HIGHLIGHT: OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// HIGHLIGHT: Part 2 Functions
const add = function (...numbers) {
  // pack them
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 7, 3, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // unpack

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); // mushrooms []
/* NOTE:
SPREAD and REST is different -> depending where they are used
SPREAD Operators -> write values separated by the commas
REST Patterns -> write variable names separate by commas
*/
