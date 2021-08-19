'use strict';
// HIGHLIGHT: Optional Chaining -> ?. -> prevent bugs
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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// console.log(restaurant.openingHours.mon.open); // NOTE: undefined -> leads to an ERROR
// NOTE: Traditional way -> just check 'mon' -> needs also check openingHours
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// HIGHLIGHT: SO we use optional chaining -> open ONLY happens if openingHours and mon EXIST
console.log(restaurant.openingHours?.mon?.open); // NOTE: undefined

// TODO: Example
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays) {
  console.log(day);
  /* NOTE: day is not property in the restaurant object, 
  so we need to use square bracket instead of openingHours.day
  */
  /* NOTE: Nullish operator ?? use here to get rid of undefined
  AND because open at 0 is a valid situation so we cannot use ||
  */
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

//HIGHLIGHT: Method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// HIGHLIGHT: ?. uses on Arrays
const users = [];
// const users = [{ name: 'Jonas', email: 'Hello@jonas.com' }];
console.log(users[0]?.name ?? 'User array empty');

/* Traditional way
if (users.length > 0) console.log(users[0].name)
else console.log('user array empty')
*/
