'use strict';
// HIGHLIGHT: DOM & DOM Manipulation
console.log(document.querySelector('.message').textContent); // NOTE: same elements used in the css (. -> className || # -> IDs)
/*
NOTE: DOM -> document object model: a connection point between HTML and JavaScript
Allow JavaScript to access HTML elements and styles to manipulate them
DOM automatically created as soon as HTML page loads, and stored in a TREE structure
TREE: each element is an object 
*/

// Change the message: Start guessing to Correct Number
document.querySelector('.message').textContent = 'Correct Number!';

// DOM Manipulation -> change content
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// NOTE: for input, we use VALUE instead of textContent
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
