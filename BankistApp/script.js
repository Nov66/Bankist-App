'use strict';
/* HIGHLIGHT: BANKIST APP
NOTE:
- Work with Arrays
*/
/* HIGHLIGHT: Data -> used in Working with Arrays
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
*/

// HIGHLIGHT: DIFFERENT DATA! Contains movement dates, currency and locale -> Used in Numbers, Dates, Intl and Timers

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
    '2021-08-25T17:01:17.194Z',
    '2021-08-27T23:36:17.929Z',
    '2021-08-30T10:51:36.790Z',
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/* HIGHLIGHT: Display Date and time of Each Movement
NOTE:
1. Display Date and time of Each Movement
2. Calculate Days Passed and Then Put as Function -> looks more modular
3. Implement daysPassed
4. Implement Internationalization
*/
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    // NOTE: Internationalization
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// HIGHLIGHT: Internationalization Numbers of Movement -> Reuseable function
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// HIGHLIGHT: Display all the Movements Activities -> Creating DOM Elements
const displayMovements = function (acc, sort = false) {
  // NOTE: First: Empty the entire Container before adding
  containerMovements.innerHTML = ''; //.textContent = 0

  // NOTE: using Slice Method to create shallow copy of an Array
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    // Implement Internationalization Function
    const formattedMovements = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMovements}</div>
      </div>
    `; // `${mov.toFixed(2)}€`
    /* NOTE: Insert New HTML inside the containerMovements
    - First parameter is the Position you want to insert (beforebegin, afterbegin, beforeend, afterend)
    - Second parameter is the String (of HTML) you want to insert
    - Here use afterbegin instead of beforeend because it will append before the elements we have
    */
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// HIGHLIGHT: Add all the Movements activities into Balance -> Using Reduce Method
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency); // `${acc.balance.toFixed(2)}€`
};
// calcDisplayBalance(account1.movements);

// HIGHLIGHT: Calculate the Summary of the Account (In, Out, Interest)
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency); // `${incomes.toFixed(2)}€`

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency); // `${out.toFixed(2)}€`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency); // `${interest.toFixed(2)}€`
};
// calcDisplaySummary(account1.movements);

/* HIGHLIGHT: Computing username (take only the first letter of the each name)
- 'Steven Thomas Williams' -> username: stw
- Using Map method
*/
// NOTE: we do not return anything in this Function -> produce Side Effect
const createUsernames = accs => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
/* NOTE: 
console.log(createUsernames('Steven Thomas Williams')); // stw
Since we do NOT want to create a new array in this situation
- We just want to change (Mutate) the username in the original object -> Side effect
- Use forEach method
*/
createUsernames(accounts);
console.log(accounts);

// HIGHLIGHT: Update UI Function
const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc);

  // Display Balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

//HIGHLIGHT: Implementing LOGIN function (Event Handler)
let currentAccount; // NOTE: Declare the variable in Global to use in the other fields

// TODO: Fake always Logged In
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  /* console.log('LOGIN'); 
  NOTE: Flash -> because this is button in the Form Element -> By default: Reload
  - We need to add function (e) -> preventDefault
  - Prevent this Form from submitting
  - Form element automatically submitted when press Enter button
  */
  e.preventDefault(); // Prevent this Form from submitting
  // console.log('LOGIN');

  // NOTE: Find Username that User Inputted
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    /* HIGHLIGHT: 
    1. Set the Current Date and Time (static -> haven't implement Timer) -> day/month/year
    2. Experimenting with API (Internationalization)
    NOTE:
    - Pass Locale inside DateTimeFormat -> 'en-UK', 'en-US', 'ar-SY' (http://www.lingoes.net/en/translator/langcode.htm)
    */
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long', // 'numeric', '2-digit'
      year: 'numeric', // '2-digit
      weekday: 'long', // 'short'
    };
    // NOTE: Can set according to User Browser Language
    const locale = navigator.language;
    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// HIGHLIGHT: Implementing Transfer Function
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAccount);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // console.log('transfer valid');

    // Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // HIGHLIGHT: Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

// HIGHLIGHT: Implementing Request Loan Function
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // NOTE: Round down the request loan -> NO need to convert to Number -> Math do Type Coercion
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add Movement
    currentAccount.movements.push(amount);

    // HIGHLIGHT: Add Loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

// HIGHLIGHT: Implementing Close Account Function by using Splice and FindIndex method
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Delete');
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete Account
    accounts.splice(index, 1); // NOTE: No need to store because it Mutate original array

    // Hide UI
    labelWelcome.textContent = 'Log in to get started';
    containerApp.style.opacity = 0;
  }
});

//HIGHLIGHT: Sorting Button used to sorting the Movements (State variable)
// NOTE: click sorting to sort movements then click to back to normal -> State variable
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
