'use strict';
/*HIGHLIGHT: Inheritance Between Classes - ES6 Classes
- Extends Parent class -> class StudentCl extends PersonCl {}
- Use super function -> super basically is the constructor function of the parent class
 */
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there!');
  }
}
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    /* NOTE: constructor function of Parent class
    - Always needs to happen first
    - Because this call to the super function is responsible for creating 'this'
    keyword in this subclass -> If not do this -> Unable to access 'this' keyword
    - If NO new property, NO need to write any Constructors in the Child Class
    class StudentCl extends PersonCl {}
    */
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} amd I study ${this.course}`);
  }

  /* NOTE: Overwrite calcAge() 
  - New method overwrite the one from parent class
  - Because this New method appear First in the Prototype Chain
  - New method is shadowing the one that is in the parent class
  */
  calcAge() {
    console.log(
      `I am ${2037 - this.birthYear} years old, but as a student I feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge(); //I am 25 years old, but as a student I feel like 35
