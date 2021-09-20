'use strict';
/*HIGHLIGHT: Encapsulation: Protected Properties and Methods
- **Keep** some properties and methods **Private inside the class**, so that they are **NOT accessible** from outside of the class.
- Then the **rest** of the methods are basically **exposed as a public interface**, which we can also call API.
- Use convention: _
*/
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // NOTE: Add _ -> NOT private -> BUT Protected property
//     this.pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks, ${this.owner}`);
//   }

//   // NOTE: Public Interface
//   getMovements() {
//     return this._movements;
//   }

//   // NOTE: Public Interface (interface to our objects -> API)
//   deposit(val) {
//     this._movements.push(val);
//   }
//   // NOTE: Public Interface (Interface to our objects -> API)
//   withdraw(val) {
//     this.deposit(-val);
//   }

//   /*NOTE: BUT this method can ONLY be Internal method that ONLY requestLoan can use
//   - Really NEED Data Encapsulation and Data Privacy
//   */
//   _approveLoan(val) {
//     const accountBalance = this._movements.reduce((acc, mov) => acc + mov, 0);
//     val <= accountBalance ? turn : false;
//   }

//   requestLoan(val) {
//     // NOTE: Condition can come form other method
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const account1 = new Account('Jonas', 'EUR', 1111);
// // account1._movements.push(250);
// // account1._movements.push(-200);
// account1.deposit(250);
// account1.withdraw(200);
// account1.requestLoan(1000);
// account1._approveLoan(1000);
// console.log(account1.getMovements());

// console.log(account1);

/*HIGHLIGHT: Encapsulation: Private Class fields and Methods
 */
class Account {
  // 1. Public Fields (instances)
  locale = navigator.language;

  // 2. Private Fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    /* NOTE: Add _ -> NOT private -> BUT Protected property
    - Redefine here
    */
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks, ${this.owner}`);
  }

  // 3. Public Methods
  // NOTE: Public Interface
  getMovements() {
    return this.#movements;
  }

  // NOTE: Public Interface (interface to our objects -> API)
  deposit(val) {
    this.#movements.push(val);
  }
  // NOTE: Public Interface (Interface to our objects -> API)
  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    // NOTE: Condition can come form other method
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // 4. Private Methods
  /*NOTE: BUT this method can ONLY be Internal method that ONLY requestLoan can use
  - Really NEED Data Encapsulation and Data Privacy
  - #approveLoan(val)
  */
  _approveLoan(val) {
    const accountBalance = this.#movements.reduce((acc, mov) => acc + mov, 0);
    val <= accountBalance ? turn : false;
  }
}

const account1 = new Account('Jonas', 'EUR', 1111);
// account1._movements.push(250);
// account1._movements.push(-200);
account1.deposit(250);
account1.withdraw(200);
account1.requestLoan(1000);
console.log(account1.getMovements());
console.log(account1);

// console.log(account1.#movements); -> Private field '#movements' must be declared in an enclosing class
// console.log(account1.#pin); -> Private field '#movements' must be declared in an enclosing class
// console.log(account1.#approveLoan(1000)); -> Private field '#movements' must be declared in an enclosing class (NOT private methods)
