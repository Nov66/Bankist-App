'use strict'; // avoid us to introduce bugs -> write secure JavaScript code
let hasDriversLicense = false;
const passTest = true;

//!Functions -> can receive and return data back
function logger() {
  console.log('My name is jonas');
}
// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)

//assignment
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
const sentence = describeCountry('Finland', 6, 'Heksinki' );
console.log(sentence);

//!function declaration -> can call them before they are defined
const age1 = calAge1(1991); //can call them before they are defined
function calAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(age1);

//!Function expression -> function without name -> produce value
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calAge2(1992);
console.log(age1, age2);

//assignment
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}% of the word population`
}

const china = percentageOfWorld1(1441)
console.log(china);

const percentageOfWorld2 = function (population) {
  return `${(population / 7900) * 100}% of the word population`
}
const china2 = percentageOfWorld2(1441)
console.log(china2)

//!Arrow Function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1993);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retired in ${retirement}`
}
console.log(yearUntilRetirement(1991, 'Jonas'));
//assignment
const percentageOfWorld3 = (population) => `${(population / 7900) * 100}% of the word population`
const china3 = percentageOfWorld3(1440)
console.log(china3)

//!Function calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  // console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


const calAge = function(birthYear) {
  return 2037 - birthYear;
}
const yearUntilRetirement1 = function(birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  if(retirement > 0) {
    console.log(`${firstName} retired in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return `${firstName} retired in ${retirement}`
}
console.log(yearUntilRetirement1(1991, 'ELLE'));
console.log(yearUntilRetirement1(1950, 'Jonas'));

//Assignment
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  // const description = `${country} has ${population} million people, which is about ${percentage}`;
  return `${country} has ${population} million people, which is about ${percentage}`;
  // console.log(description)
}
// describePopulation('china', 1441);
console.log(describePopulation('china',1441));