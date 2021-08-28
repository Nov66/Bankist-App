'use strict';
/* HIGHLIGHT: More ways of Creating and Filling Array
- Fill method -> Mutate original Array
 */
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7); // NOTE: Create an Array with 7 elements
console.log(x); // [empty × 7]
console.log(x.map(() => 5)); // NOTE: [empty × 7] -> can NOT call other method except Fill()

/* HIGHLIGHT: Fill Method
NOTE:
- fill (1, 3, 5) -> second Parameter is Start position, third is End position (Not include the last)
*/
x.fill(1);
console.log(x); // [1, 1, 1, 1, 1, 1, 1]

// NOTE: Empty arrays + fill method
const x1 = new Array(7);
// x1.fill(1, 3); // [empty × 3, 1, 1, 1, 1]

x1.fill(1, 3, 5); // [empty × 3, 1, 1, empty × 2]
console.log(x1); // [1, 1, 1, 1, 1, 1, 1]

arr.fill(23, 2, 6);
console.log(arr); // [1, 2, 3, 4, 23, 23, 7]

/* HIGHLIGHT: Array.from
NOTE:
- need an Object to declare the length of Array
- need CALLBACK function
*/
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// const randomDice = Array.from(
//   { length: 100 },
//   (cur, i) => Math.trunc(Math.random * 6) + 1
// );
// console.log(randomDice);

/* HIGHLIGHT: Real case -> Array-like structure (maps, sets, querySelectAll(node lists))
NOTE:
- Array-like structure can NOT use Real Array method (map, filter, reduce)
- array.from can help with Array-like structure to use Real Array method
*/
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

const containerMovements = document.querySelector('.movements');
const labelBalance = document.querySelector('.balance__value');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
calcDisplayBalance(account1);

/* NOTE: Convert movements on UI to Array using Array.from
- Put map function as Second parameter
- Can also use Spread Operator to convert to Array, then use Map method
*/
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);
  // console.log(movementsUI); // [div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value]
  // console.log(movementsUI.map(el => Number(el.textContent.replace('€', ''))));
  // [1300, 70, -130, -650, 3000, -400, 450, 200]

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
