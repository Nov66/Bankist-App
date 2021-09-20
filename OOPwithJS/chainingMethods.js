'use strict';
/* HIGHLIGHT: Chaining Methods
- Return the object itself ar the end od a methods that we want to be chainable
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
    return this;
  }
  // NOTE: Public Interface (Interface to our objects -> API)
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // NOTE: Condition can come form other method
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4. Private Methods
  /*NOTE: BUT this method can ONLY be Internal method that ONLY requestLoan can use
  - Really NEED Data Encapsulation and Data Privacy
  - #approveLoan(val)
  */
  _approveLoan(val) {
    // const accountBalance = this.#movements.reduce((acc, mov) => acc + mov, 0);
    // val <= accountBalance ? true : false;
    return true;
  }
}

const account1 = new Account('Jonas', 'EUR', 1111);

account1
  .deposit(300)
  .deposit(500)
  .withdraw(35)
  .requestLoan(25000)
  .withdraw(4000);
console.log(account1.getMovements());
