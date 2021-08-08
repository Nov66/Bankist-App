//* Iteration
//* for loop keeps running while condition is true
for(let rep = 1; rep <= 10; rep++) {
  console.log(`lifting ${rep}`);
}

const jonas = [
  'Jonas',
  'Liu',
  2037 - 1991,
  'teacher',
  ['Sonya', 'Peter', 'Steven']
];
const types = []; //* create an empty array
for(let i = 0; i < jonas.length; i++) {
  //* reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  //* filling types array
  // types[i] = typeof jonas[i]; //* add elements to the empty array
  types.push(typeof jonas[i]);
}
console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];
for(i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//* Continue & Break statement
console.log('---- only String ----')
for(let i = 0; i < jonas.length; i++) {
  //* continue statement terminate the current iteration
  if(typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}
console.log('---- break with Number ----')
for(let i = 0; i < jonas.length; i++) {
  //* break statement terminate the current loop
  if(typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}

//* Looping Backward
const jonas1 = [
  'Jonas',
  'Liu',
  2037 - 1991,
  'teacher',
  ['Sonya', 'Peter', 'Steven']
];
for(let i = jonas1.length - 1; i >= 0; i--) {
  console.log(i, jonas1[i]);
}

//* Loops in Loops
for(let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for(let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight ${rep} 🏋️‍♀️`);
  }
}

//* While Loop -> use it when do not know how many loops/iterations will be
/*
for(let rep = 1; rep <= 5; rep++) {
  console.log(`lifting ${rep} 🏋️‍♀️`);
}
*/
let rep = 1;
while(rep <= 5) { // while(condition)
  console.log(`While Loop: lifting ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // random a number from 1 - 6 
while(dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end...');
}

