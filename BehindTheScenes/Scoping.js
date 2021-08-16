'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName); NOTE: Global variable -> firstName (look up -> global scope)

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;

      // HIGHLIGHT: Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'; // NOTE: JS always try to find variable in the same scope

      // HIGHLIGHT: Reassigning outer scope's variable
      output = `New Output`;

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str); NOTE: only available inside the block (ES6)
    console.log(millennial); // NOTE: it can be accessed because 'var' declared
    //console.log(add(2, 3)); NOTE: functions in block are also effected but only in Strict Mode
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
/* NOTE: ReferenceError -> because Scope Chain is one-way street -> inner scope can have access to outer scope
console.log(age); 
printAge();
*/
