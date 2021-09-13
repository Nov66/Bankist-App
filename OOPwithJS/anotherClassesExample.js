'use strict';
/* HIGHLIGHT: Another Classes Example
 */
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks, ${this.owner}`);
  }
  // NOTE: Public Interface (interface to our objects -> API)
  deposit(val) {
    this.movements.push(val);
  }
  // NOTE: Public Interface (Interface to our objects -> API)
  withdraw(val) {
    this.deposit(-val);
  }

  /*NOTE: BUT this method can ONLY be Internal method that ONLY requestLoan can use
  - Really NEED Data Encapsulation and Data Privacy
  */
  approveLoan(val) {
    const accountBalance = this.movements.reduce((acc, mov) => acc + mov, 0);
    val <= accountBalance ? turn : false;
  }

  requestLoan(val) {
    // NOTE: Condition can come form other method
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const account1 = new Account('Jonas', 'EUR', 1111);
/* NOTE: use Public Interface instead of manually manipulate these properties outside of the object
account1.movements.push(250);
account1.movements.push(-200);
*/
account1.deposit(250);
account1.withdraw(200);
account1.requestLoan(1000);
account1.approveLoan(1000);

console.log(account1);
console.log(account1.pin);
