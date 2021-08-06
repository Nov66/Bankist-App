//!Arrays -> data structure, array is not primitive value -> it is mutable
const friend1 = 'Sonya';
const friend2 = 'Jonas';
const friend3 = 'ELLE';

const friends = ['Sonya', 'Jonas', 'ELLE'];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // can put expression in the brackets

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];
const firstName = 'Jonas'
const jonas = [firstName, 'Liu', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);