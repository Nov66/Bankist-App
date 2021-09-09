'use strict';
/*HIGHLIGHT: Prototypes -> Implement Prototypal Inheritance
- Each function in JS has a property called Prototype
- Each object created by this Constructor Function will now get access to all the Methods of this Prototype Property.
 */
const Person = function (firstName, birthYear) {
  // NOTE: Instance Property
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

/* HIGHLIGHT: Set Methods on Prototype -> Create calcAge Function
- NOT Own Property
*/
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

/* NOTE: Can access to calcAge function -> because Prototypal Inheritance
- Only Create one Copy of calcAge function
- Reuse it
*/
jonas.calcAge(); // 46
matilda.calcAge(); // 20
jack.calcAge(); // 62

/* NOTE: Prototype of Jonas -> NOT prototype property
- Can see calcAge function in it -> this is why jonas can use it
- To prototype of the Jonas object is essentially the prototype property of the constructor function.
jonas对象的原型,本质上是构造函数的原型属性。
- Person.prototype is NOT the prototype of person. 
But it is what's gonna be Used as the prototype of all the Objects that are created with the Person constructor function.
不是Person的原型。但相反，它将被用作使用 Person 构造函数创建的所有对象的原型。
- 可以理解为Person.prototypeLinkedObjects
*/
console.log(jonas.__proto__); // __proto__ -> depreciated, use Object.getPrototypeOf()
console.log(Person.prototype);
console.log(Object.getPrototypeOf(jonas));
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

/*HIGHLIGHT: Set Properties on Prototype -> Not just Methods
- NOT Own Property
- Own properties are only the ones that are declared directly on the object itself
NOT including Inherited Properties
 */
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); // Both calcAge function and species can check in the Prototype
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__); // Person.prototype
console.log(jonas.__proto__.__proto__); // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null
console.dir(Person.prototype.constructor); // Constructor property Points back to Person

/* HIGHLIGHT: Working with Array
- Each array does NOT contains these methods
= But each array will Inherit these methods from its Prototype
- The prototype property of the constructor is gonna be the prototype of all the objects created by that constructor.
- All methods live in the prototype property of the array constructor. 
*/
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__); // All the methods of Arrays
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

/* NOTE:
Added a new method to the prototype property of the array constructor.
- Now all arrays will inherit this method (unique)
- But NOT use this to add methods
 */
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); // [3, 6, 5, 9]

const h1 = document.querySelector('h1'); // HTMLHeadingElement -> HTMLElement -> Element -> Node -> Event Target -> Object
console.dir(x => x + 1);

const arr1 = [1, 2, 3];

console.log(arr1.__proto__.__proto__ === Object.prototype); // true
console.log(arr1.__proto__ === Array.prototype); // true
console.log(Array.__proto__.__proto__ === Object.prototype); // true
