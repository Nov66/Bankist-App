'use strict';
// HIGHLIGHT: Strings
const airline = 'Tap air portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

console.log('B737'[0]); // B
console.log(airline.length);
console.log('B737'.length);

// HIGHLIGHT: Method of Strings
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r')); // NOTE: Found last 'r'
console.log(airline.indexOf('portugal')); // NOTE: Case sensitive

// NOTE: which position start to EXTRACT -> NOT change actual string -> return NEW string
console.log(airline.slice(4)); // air portugal
console.log(airline.slice(4, 7)); // air -> only display 4 - 6

console.log(airline.slice(0, airline.indexOf(' '))); // Tap
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // portugal -> include space so + 1
// NOTE: starts from the last
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // ap air portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1); // NOTE: Extract the last one
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// HIGHLIGHT: Boxing
console.log(new String('jonas'));
console.log(typeof new String('jonas')); // Object
// NOTE: All string method returns primitives even if called on a object
console.log(typeof new String('jonas').slice(1)); // String

// HIGHLIGHT: Simple String Method
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase()); // NOTE: can also apply directly to the string

// TODO: Fix Capitalization in name;
const passenger = 'jOnAs'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// Function
const correctNameFormat = passengerName => {
  const passengerLowerName = passengerName.toLowerCase();
  const passengerCorrectName =
    passengerLowerName[0].toUpperCase() + passengerLowerName.slice(1);
  console.log(passengerCorrectName);
};

// TODO: Check (Comparing) Emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // NOTE: Remove White Space
// console.log(trimmedEmail);
// HIGHLIGHT: Trim -> remove White Space -> trim end/ trim start
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// HIGHLIGHT: Replacing -> NOT Mutate original one -> case sensitive
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate')); // NOTE: ONLY replace the first appear word
console.log(announcement.replaceAll('door', 'gate')); // NOTE: replaceAll Replace all word
// HIGHLIGHT: Regular Expression -> add / /
console.log(announcement.replace(/door/g, 'gate'));

// HIGHLIGHT: Boolean
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Aid'));
console.log(plane1.startsWith('Ai'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the New Airbus Family');
}

// TODO: Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // NOTE: NEED to convert to Lowercase at first
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// HIGHLIGHT: Split Method -> create an Array
console.log('a + very + nice + string'.split('+')); // ["a ", " very ", " nice ", " string"]
console.log('shengyan liu'.split(' ')); // ["shengyan", "liu"]
// Destructuring
const [firstName, lastName] = 'Shengyan Liu'.split(' ');
// NOTE: Split + Join Method
const newName = ['Ms', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Ms Shengyan LIU

const capitalizeName = function (name) {
  const names = name.split(' '); // NOTE: Create an Array
  console.log(names); // ["jessica", "ann", "smith", "davis"]
  const namesUpper = [];
  for (const n of names) {
    // NOTE: Two way of Capitalization
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper); //  ["Jessica", "Ann", "Smith", "Davis"]
  console.log(namesUpper.join(' ')); // Jessica Ann Smith Davis
};

capitalizeName('jessica ann smith davis');
capitalizeName('shengyan liu');

// HIGHLIGHT: Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+')); // +++++++++++Go to gate 23!+++++
console.log('Jonas'.padStart(25, '+').padEnd(30, '+')); // ++++++++++++++++++++Jonas+++++

// TODO: Real Example (credit card)
const maskCreditCard = function (number) {
  const str = number + ''; // NOTE: Convert Number to String (if a number plus a string, the whole will be string) -> or use String()
  const lastFour = str.slice(-4); // Get last four digital
  return lastFour.padStart(str.length, '*');
};

console.log(maskCreditCard(43382749273489237));
console.log(maskCreditCard('8378921739811892'));

// HIGHLIGHT: Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5); // There are 5 planes in line 🛩🛩🛩🛩🛩
planesInLine(3); // There are 3 planes in line 🛩🛩🛩
planesInLine(12);
