// Arrays
const jonasArray = [
  "shengyan",
  "liu",
  2037 - 1991,
  "teacher",
  ["Sonya", "Peter", "Steve"],
];

// HIGHLIGHT: Objects -> curly braces, order of retrieve them is not important
const jonas = {
  firstName: "Shengyan",
  lastName: "Liu",
  age: 2037 - 1991,
  job: "student",
  friends: ["Sonya", "Peter", "Steve"],
};
//HIGHLIGHT: Dots & Brackets notation -> retrieve data
console.log(jonas);
console.log(jonas.lastName); // NOTE: need to use real property name
console.log(jonas["lastName"]); // NOTE: can put any expressions in here

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // NOTE: can use template literal
console.log(jonas["last" + nameKey]);
/* TODO:
const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends ');
console.log(jonas[interestedIn]); // expression in the bracket will be evaluated

if(jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}
*/
//HIGHLIGHT: add property to the Object
jonas.location = "Australia";
jonas["twitter"] = "@shengyanliu";
console.log(jonas);
// TODO: challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and her best friend is called ${jonas.friends[0]}`
);

//HIGHLIGHT: Objects Methods
const liu = {
  firstName: "Shengyan",
  lastName: "Liu",
  birthYear: 1991,
  job: "student",
  friends: ["Sonya", "Peter", "Steve"],
  hasDriversLicense: false,

  /* calcAge: function(birthYear) {
    return 2037 - birthYear
  } NOTE: -> function expression in the object is called Method (function value)
  *HIGHLIGHT: 'this' key word -> calling jonas object itself -> REUSEABLE
  calcAge: function() {
    console.log(this);
    return 2037 - this.birthYear
  }
  */
  calcAge: function () {
    this.age = 2037 - this.birthYear; //HIGHLIGHT: create a new property: age
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license. `;
  },
};
liu.calcAge(); //NOTE: need to call the function first to use this.BMI
console.log(liu.calcAge()); //HIGHLIGHT: Dot notation
// console.log(liu['calcAge'](liu.birthYear)); HIGHLIGHT: Bracket notation
//NOTE: more efficient way compared to line 56 - 59, only called age once instead of every time
console.log(liu.age);
console.log(liu.age);
console.log(liu.age);

// TODO: Challenge
console.log(liu.getSummary());
