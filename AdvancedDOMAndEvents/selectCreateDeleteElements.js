'use strict';
// HIGHLIGHT: Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelection = document.querySelectorAll('.section');
console.log(allSelection); // NOTE: Return NodeList

document.getElementById('section--1');
const allBtns = document.getElementsByTagName('button');
console.log(allBtns); // NOTE: Return HTMLCollections -> automatically updated based on DOM tree

console.log(document.getElementsByClassName('btn')); // NOTE: Return HTMLCollections

/* HIGHLIGHT: Creating and Inserting Elements
- .insertAdjacentHTML
- DOM element is Unique, can only exist at one place at a time
*/
const message = document.createElement('div'); // NOTE: NOT yet in the DOM -> need to manually insert to page
message.classList.add('cookie-message');

//  NOTE: Insert Simple Text: message.textContent = 'We use cookie for improved functionality and analytics';
// NOTE: Insert HTML
message.innerHTML =
  'We use cookie for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';
/* NOTE:
header.prepend(message); NOTE: First Child
header.append(message.cloneNode(true)); NOTE: Insert Multiple Copy into same element
header.before(message);
header.after(message);
*/
header.append(message); // NOTE: Last Child (can also use as MOVE element)

// HIGHLIGHT: Deleting the Element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    /* Old way
    message.parentElement.removeChild(message); // parentElement -> DOM Traversing
    */
    message.remove();
  });
