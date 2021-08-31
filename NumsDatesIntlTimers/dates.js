'use strict';
/* HIGHLIGHT: Dates and Time
 */
// NOTE: First to Create a Date
const now = new Date();
console.log(now);

console.log(new Date('Aug 30 2021 14:19:54'));
console.log(new Date('December 24, 2015'));

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

console.log(new Date(account1.movementsDates[0])); // Tue Nov 19 2019 08:31:17 GMT+1100 (Australian Eastern Daylight Time)
console.log(new Date(2037, 10, 19, 15, 23, 5)); // 0 based -> Thu Nov 19 2037 15:23:05
console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 -> Automatically convert to Next Day

console.log(new Date(0)); // Thu Jan 01 1970 10:00:00 GMT+1000 (Australian Eastern Standard Time)
// NOTE: Convert to milliseconds -> TimeStamp
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 10:00:00 GMT+1000 (Australian Eastern Standard Time)

console.log('---- Working with Dates ----');
// HIGHLIGHT: Working with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // Thu Nov 19 2037 15:23:00 GMT+1100 (Australian Eastern Daylight Time)
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 -> November (0 based)
console.log(future.getDay()); // 4 -> Thursday (0 based)
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T04:23:00.000Z -> NOTE: Convert to String
// NOTE: TimeStamp -> milliseconds which have passed since January 1st, 1970
console.log(future.getTime()); // 2142217380000
console.log(new Date(2142217380000)); // Thu Nov 19 2037 15:23:00 GMT+1100 (Australian Eastern Daylight Time)

console.log(Date.now());

// NOTE: Set Dates
future.setFullYear(2040); // Mon Nov 19 2040 15:23:00 GMT+1100
console.log(future);

console.log('---- Operations with Dates ----');
/* HIGHLIGHT: Operations with Dates
- Can use moment.js library
 */
const future2 = new Date(2037, 10, 19, 15, 23);
console.log(+future2);

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14, 10, 8)
);
console.log(days1); // 10 days
