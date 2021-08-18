'use strict';
/* NOTE: Logical Operators -> use ANY data type, return ANY data type
Short-circuiting 短路计算 -> If first value is TRUTHY value -> return immediately
*/

/* NOTE: OR || returns first TRUTHY value of all the operands
or the last value if all of them are falsy
-> set DEFAULT values

NOTE: AND && returns first FALSY value of all the operands
or the last value if all of them are truthy
-> Execute SECOND operand if first one is TRUE
*/

console.log('----- OR -----');
console.log(3 || 'Jonas'); // 3 -> because || returns first TRUTHY value
console.log('' || 'Jonas'); // Jonas -> because first value is falsy value
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello -> Truthy

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

// restaurant.numGuests = 23; NOTE: set to 0 leads to 10, but 0 guest is a valid number
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// HIGHLIGHT: Short-circuiting ||
const guest2 = restaurant.numGuests || 10; // NOTE: first value falsy -> 10
console.log(guest2);

// HIGHLIGHT: Short=circuiting &&
console.log('---- AND ----');
console.log(0 && 'JONAS'); // 0 -> because && return the first FALSY value
console.log(7 && 'JONAS'); // JONAS -> 7 is truthy value
console.log('HELLO' && 23 && null && 'jonas'); // null -> falsy value

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'cheese');
}
// NOTE: Short=circuiting &&
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'cheese');

// HIGHLIGHT: Nullish coalescing operator ?? (introduce in 2020)
restaurant.numGuests = 0; // NOTE: set to 0 leads to 10, but 0 guest is a valid number
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

/*NOTE: ?? works with KNOWLEDGE values instead of falsy values
Nullish: ONLY includes null and undefined (NOT 0 or '')
不定义就是undefined -> falsy value
定义了0 -> 0
*/
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
