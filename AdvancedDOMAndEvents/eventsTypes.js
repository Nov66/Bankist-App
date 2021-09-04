'use strict';
// HIGHLIGHT: Events
const h1 = document.querySelector('h1');
// NOTE: MouseEnter -> hover over
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');

  /*HIGHLIGHT: Remove event listen -> ONLY listen for the Event Once
  NOTE: Can Remove at anywhere (line 15)
  h1.removeEventListener('mouseenter', alertH1);
  */
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

/* NOTE: On events -> Old Way
h1.onmouseenter = function (e) {
  alert('addEventListener: Great! You are reading the heading');
};
*/
