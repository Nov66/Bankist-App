'use strict';
/* HIGHLIGHT: Event Propagation: Bubbling & Capturing
NOTE:
- Bubbling up means its events also happened in all of the parent elements
- Capturing phase is irrelevant -> But can add third parameter to capture events instead of Bubble Up (Rarely use)
*/
// NOTE: Random Color -> rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  /* NOTE: 
  - 'this' keyword in Event Handler -> points to the Element on which that event handler attached
    -> document.querySelector('.nav__link')
  - e.target -> where the Events originated, where the event first happened, NOT the element on which handler attached
  - e.currentTarget -> Current element on which handler attached
  */
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); // nav__link
  console.log(e.currentTarget === this); // True

  /* HIGHLIGHT: Stop Propagation -> NOT a good idea
  e.stopPropagation();
  */
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget); // nav__link
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget); // nav__link
  },
  true // HIGHLIGHT: Capturing phase (Nav became first) NAV -> LINK -> CONTAINER
);
