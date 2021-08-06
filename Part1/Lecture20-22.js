/*
// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// TYpe coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23' - '10' - 3);
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/
// 5 falsy values: 0. '', undefined. null. NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
  console.log('Dont spend it all');
} else {
  console.log('You should get a job!')
}

let height = 0;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// const age = '18'; prefer strict equal
const age = 18;
if(age === 18) console.log('You just became an adult (strict)')
if(age == 18) console.log('You just became an adult (loose')

const favorite = Number(prompt('What is your favorite number?'))
console.log(favorite)

if(favorite === 23) { // '23' == 23 or 23 === 23
  console.log('Cool! 23 is an amazing number')
} else if(favorite === 7) {
  console.log('7 is also a cool number')
} else if(favorite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if(favorite !== 23) console.log('why not 23')