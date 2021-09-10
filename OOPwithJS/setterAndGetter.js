'use strict';
/* HIGHLIGHT: Setters and Getters
- Useful for Data Validation
 */
// Working with Regular Object
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],
  /* NOTE: Getter
  - When we want to read sth as Property, but still need to calculation before
  */
  get latest() {
    return this.movements.slice(-1).pop();
  },
  /* NOTE: Setter
  - Must need a Parameter
  */
  set latest(mov) {
    this.movements.push(mov);
  },
};
// NOTE: Call Getter
console.log(account.latest); // 300
/*NOTE: Call Setter
- Regular Method
account.latest(50);
- Since now Latest is a Property
set Value first
*/
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

// Working with Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // NOTE: Getter
  get age() {
    return 2037 - this.birthYear;
  }
  /* NOTE: Setter 
  When Creating a Setter for a property that already exist -> fullName
  - Need to add Convention to this.fullName -> this._fullname
  - Solve Naming Conflict, but we can NOT use jessica.fullName
  - Need to create Getter for the fullName Property
  */
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}
// NOTE: Call Getter
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica.age); // 41
// NOTE: Call Setter
console.log(jessica.fullName); // Jessica Davis
// const walter = new PersonCl('Walter', 1965);
