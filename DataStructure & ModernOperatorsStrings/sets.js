'use strict';
// HIGHLIGHT: SETS -> a collection of Unique values -> never has duplicate
const orderSet = new Set([
  'Pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(orderSet); // NOTE: all the duplicates has gone: {"Pasta", "pizza", "risotto", "pasta"}
console.log(new Set('Jonas')); //  {"J", "o", "n", "a", "s"}
// HIGHLIGHT: Check length of the SET
console.log(orderSet.size);
// HIGHLIGHT: Check whether include element = array.include
console.log(orderSet.has('pizza'));
console.log(orderSet.has('Bread'));
// HIGHLIGHT: CANNOT Retrieve data -> NO index -> CANNOT get data outside of SETS
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('risotto');
// orderSet.clear(); NOTE: clear the whole set
console.log(orderSet);
// HIGHLIGHT: LOOPING Sets
for (const order of orderSet) {
  console.log(order);
}

// TODO: Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// HIGHLIGHT: convert Set to Array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// HIGHLIGHT: To know the size of set without define them
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

console.log(new Set('shengyanliu').size);
