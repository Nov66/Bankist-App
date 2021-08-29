'use strict';
// HIGHLIGHT: Array Methods Practice
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log('---- Practice ----');
console.log('---- 1. ----');
// HIGHLIGHT: 1. Calculate Sum of all accounts' movements
// const bankDepositSum = accounts.map(acc => acc.movements).flat(); -> Map + Flat = flatMap()
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

console.log('---- 2. ----');
// HIGHLIGHT: 2. Calculate how many deposit have been in the Bank at least 1000
// NOTE: Solution 1
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// NOTE: Solution 2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

// NOTE: ++ Operator still return old value -> use Prefixed ++
let a = 10;
// console.log(a++); -> 10
console.log(++a); // prefixed ++ -> 11
console.log(a); // 11

console.log('---- 3. ----');
/* HIGHLIGHT: 3. Create an Object which Contains Sum of Deposits and Sum of Withdrawals -> Use Reduce
NOTE: 
- Creating Object using Reduce method (All examples before can use Only Reduce method)
- Since we are creating a Object, so the Start Point is Object -> { deposits: 0, withdrawal: 0 }
- Starting Point is the Accumulator (in this case is Sums)
- When we use Bracket block in the Arrow function, need to Return Accumulator
*/
// const sums = accounts -> can Destructuring
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // NOTE: Solution 1 -> duplication
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

      // NOTE: Solution 2 -> Use Brackets Notation instead of Dot Notation
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals); // 25180 -7340
// console.log(sums); // {deposits: 25180, withdrawals: -7340}

console.log('---- 4. ----');
/* HIGHLIGHT: 3. Create an simple function to convert any String to Title case
NOTE:
- this is a nice title -> This Is a Nice Title
*/
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .filter(word => word) // NOTE: Filter method only return true value -> empty string is false value
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase('    this is a nice     title'));
console.log(
  convertTitleCase('      this is a LONG     title but     not too long')
);
console.log(
  convertTitleCase('       and here is     another title with an EXAMPLE')
);
