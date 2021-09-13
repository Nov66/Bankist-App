'use strict';
/*HIGHLIGHT: Inheritance Between Classes - Object.create()
 */
//NOTE: Objects that Serve as the prototype to create a new Person object using Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  // NOTE: Create Object Programmatically -> Initialize Object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} amd I study ${this.course}`);
};
/* NOTE: StudentProto object is now the Prototype of jay
- PersonProto object is in turn the Prototype of StudentPrototype
- PersonProto is Parent Prototype of jay -> it is in the Prototype Chain
*/
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
