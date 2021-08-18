'use strict';
// HIGHLIGHT: Looping Arrays -> for-of loop
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
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// Traditional Way
// for (let i = 0; i < menu.length; i++) console.log(menu[i]);
// HIGHLIGHT: for-of LOOP -> can still use Continue and Break statement
for (const item of menu) console.log(item);

// NOTE: Normal Way
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
  // console.log(item);
}
// console.log([...menu.entries()]);
// NOTE: Destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
