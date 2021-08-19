'use strict';
// HIGHLIGHT: Looping Objects
const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprses Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`we are open on ${properties.length} days`);

// HIGHLIGHT: Looping Property Name (KEYS)
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// HIGHLIGHT: Looping Property Values (VALUES)
const values = Object.values(openingHours);
console.log(values);
// NOTE: Object.entries() -> return KEYS and VALUES -> Loop Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// NOTE: [key, value] -> Destructuring array (can use any name we want)
for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
