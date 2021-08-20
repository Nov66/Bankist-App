'use strict';
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):

underscore_case 
 first_name 
Some_Variable 
  calculate_AGE 
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase   ✅ 
firstName        ✅✅ 
someVariable     ✅✅✅ 
calculateAge     ✅✅✅✅ 
delayedDeparture ✅✅✅✅✅
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const text1 = text.split('\n');
  console.log(text1);

  // for (const word of text1) {
  //   const wordLower = word.toLowerCase();
  //   const wordSlice =
  //     wordLower.slice(0, wordLower.indexOf('_')) +
  //     wordLower.slice(wordLower.indexOf('_') + 1)[0].toUpperCase() +
  //     wordLower.slice(wordLower.indexOf('_') + 2);
  //   console.log(wordSlice.trim());
  // }

  // NOTE: entries() method to get the index of an array
  for (const [i, word] of text1.entries()) {
    const [first, second] = word.toLowerCase().trim().split('_'); // NOTE: Destructuring
    // console.log(word.toLowerCase().trim().split('_'));
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // NOTE: padEnd to padding and make sure ✅ starts at the same position
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
