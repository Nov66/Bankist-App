'use strict';
/* HIGHLIGHT: Map -> data structure to map values 
-> keys can be any data type compared to Objects
Keys of Object are usually Strings
*/
const rest = new Map(); // Create empty map
rest.set('name', 'Classico Italiano'); // NOTE: add elements
rest.set(1, 'fiRENZE, iTALY');
rest.set(2, 'Lisbon, Portugal');
// NOTE: SET method not only add but also can return
console.log(rest.set(2, 'Lisbon, Portugal')); // {"name" => "Classico Italiano", 1 => "fiRENZE, iTALY", 2 => "Lisbon, Portugal"}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');
// HIGHLIGHT: Read DATA from Map -> GET method
console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // we are open
console.log(rest.get(1)); // fiRENZE, iTALY -> if use '1' -> it will be undefined
// NOTE: power of has Boolean in the Map
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // we are open -> true inside
// NOTE: Check whether include this property
console.log(rest.has('categories'));
// NOTE: delete property
rest.delete(2);

// rest.clear();
console.log(rest);
console.log(rest.size); // NOTE: Check the length of the map

/* NOTE: line 39 -> undefined -> because it is not point to the same memory address
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);
console.log(rest.get([1, 2])); // Undefined
*/
// NOTE: if declare at first -> points to the same memory address
const arr = [1, 2];
rest.set(arr, 'Test');
// NOTE: useful for the DOM element
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr)); // Test

// HIGHLIGHT: Another way to ADD (array of an array) elements in Map instead of Set method
const question = new Map([
  ['question', 'what is the best programming language in the world'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

// HIGHLIGHT: Convert Object to Map (array of array)
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
console.log(Object.entries(openingHours));
// NOTE: When you want to a Object to be a Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// HIGHLIGHT: Map Iteration -> just use question (for Object we need to apply Object.entries() to iterate)
// TODO: Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key} : ${value}`);
}
const answer = Number(prompt('Your Answer'));
alert(question.get(answer === question.get('correct'))); // 直接get true or false
//  alert(question.get(false)) : alert(question.get(true));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// HIGHLIGHT: Convert Map to Array by using Spread operator
console.log([...question]);
console.log([...question.entries()]); // NOTE: same as above
console.log([...question.keys()]); // NOTE: obtain Keys of Array
console.log([...question.values()]); // NOTE: obtain Values of Array
