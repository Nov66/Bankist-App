let age = 30;
age = 31; //mutate the variable: using let

const birthYear = 1991; //variable cannot be changed: immutable

//math operators
const now = 2037;
const ageJonas =now - 1991;
const ageElle =now - 2020;
console.log(ageJonas, ageElle);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Liu';
console.log(firstName + ' ' + lastName)

//assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageElle);
console.log(ageElle >= 18);
const isFullAge = ageElle >=18;
console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y)
const averageAge = (ageJonas + ageElle) / 2
console.log(ageJonas, ageElle, averageAge);