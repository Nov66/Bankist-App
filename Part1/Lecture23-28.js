const hasDriversLicense = true;// A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive) {
//   console.log('Sarah is able to drive')
// } else {
//   console.log('Someone else should drive...')
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if(shouldDrive) {
  console.log('Sarah is able to drive')
} else {
  console.log('Someone else should drive...')
}

const day = 'wednesday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos')
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code');
    break;
  case 'friday':
    console.log('record')
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day!');
}

if(day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Prepare theory videos')
} else if (day === 'friday') {
  console.log('record')
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend')
} else {
  console.log('Not a valid day')
} 

// conditional (ternary operators)
const age = 23;
age >= 18 ? console.log('I like to drink wine🍷') :
console.log('I like to drink water💧')

const drink = age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink)

let drink2;
if(age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water💧'}`)