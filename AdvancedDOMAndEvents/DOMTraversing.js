'use strict';
/* HIGHLIGHT:
NOTE: Can select one element based on Other Element
*/
const h1 = document.querySelector('h1');

/* NOTE: Going Downwards -> Select Child elements
- querySelector method -> Find Children
*/
console.log(h1.querySelectorAll('.highlight')); // NodeList -> [span.highlight, span.highlight];
console.log(h1.childNodes); // NodeList -> [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); // NOTE: ONLY apply to Direct Children -> HTML Collection -> [span.highlight, br, span.highlight]
h1.firstElementChild.style.color = 'white'; // NOTE: ONLY first element change
h1.lastElementChild.style.color = 'orangered'; // NOTE: ONLY Last element change

/* NOTE: Going UPwards -> Select Parent elements
- closest method -> Find Parents
if there are multiple elements with the class of the Header, but we only want to define
that is a Parent Element of h1
Select closest Parent Element that has .header class of h1 element
*/
console.log(h1.parentNode); // header__title
console.log(h1.parentElement); // header__title

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

/* NOTE: Going Sideways -> Select Sibling elements
- Can ONLY access Direct Siblings
*/
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling); // <h4>"A simpler banking experience for a simpler life."</h4>

console.log(h1.previousSibling); // #text
console.log(h1.nextSibling); // #text
// NOTE: Get all the Siblings from Parent Element
console.log(h1.parentElement.children); // HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
