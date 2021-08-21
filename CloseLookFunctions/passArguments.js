'use strict';
/* HIGHLIGHT: How passing Arguments work in Value and Reference
- Passing Primitive Values to a Function is same as creating a COPY of value -> NO change to the original
- Passing Reference Type (Object) TO a Function is COPYING the object -> CHANGE original 
- NO pass by reference
= ONLY pass by value
*/
const flight = 'LH234';
const jonas = {
  name: 'Shengyan LIU',
  passport: 123456,
};

const checkIn = function (flightNum, passenger) {
  // NOTE: flightNum here is COPY of flight -> const flightNum = flight
  flightNum = 'LH999';
  // NOTE: passenger Name Changed because we pass the reference to the object -> const passenger = jonas -> Still a Value contains Memory address
  passenger.name = 'Ms. ' + passenger.name;

  if (passenger.passport === 123456) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight); // LH234 ->  NOTE: NO change because of COPY
console.log(jonas); // {name: "Ms. Shengyan LIU", passport: 123456} -> NOTE: because they are same object in a memory heap

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas); // NOTE: Two functions are manipulating the same Object
checkIn(flight, jonas); // Wrong Password

// HIGHLIGHT: Only pass by VALUE (NO pass by reference)
