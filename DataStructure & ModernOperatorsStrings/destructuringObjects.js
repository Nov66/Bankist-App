'use strict';
// HIGHLIGHT: Destructuring Objects
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
  // NOTE: Destructuring the object here (set default value)
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// HIGHLIGHT: Call the function -> passing one object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});

// NOTE: USEFUL for API calls
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// NOTE: Change property name -> dealing with third party data
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// NOTE: Set the default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] ["Focaccia", "Bruschetta", "Garlic Bread", "Caprses Salad"]

// HIGHLIGHT: Mutating variables while destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // NOTE: add parentheses
console.log(a, b);

// HIGHLIGHT: Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
