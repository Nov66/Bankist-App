'use strict';
// HIGHLIGHT: Default Parameters -> set parameters by default -> do not need to pass them manually
const bookings = [];
// NOTE: ES6 -> set default value
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // NOTE: can Contains any Expression
) {
  // NOTE: Set Default Value
  /* ES5 way
  numPassengers = numPassengers || 1; // {flightNum: "LH123", numPassengers: 1, price: 199}
  price = price || 199;
  */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800); // {flightNum: "LH123", numPassengers: 2, price: 800}
createBooking('LH123', 5); // {flightNum: "LH123", numPassengers: 5, price: 995}
createBooking('LH123', undefined, 1000); // NOTE: can NOT skip directly but can set UNDEFINED
