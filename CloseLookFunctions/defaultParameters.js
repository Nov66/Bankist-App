'use strict';
// HIGHLIGHT: Default Parameters -> set parameters by default -> do not need to pass them manually
const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  numPassengers = numPassengers ||
  
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
