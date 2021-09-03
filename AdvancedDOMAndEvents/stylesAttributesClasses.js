'use strict';
const header = document.querySelector('.header');
const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML =
  'We use cookie for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

// HIGHLIGHT: Styles (inline style)
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // NOTHING -> NOTE: can NOT get style that hidden in the class
console.log(message.style.backgroundColor); // rgb(55, 56, 61) -> CAN get it if we manually set (inline style)

// NOTE: get the Style that hidden in the class -> getComputedStyle().
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// NOTE: Change the style by using getComputedStyle
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

/* HIGHLIGHT: CSS custom properties (CSS variables) -> :root in CSS file
- Change style setting by using setProperty
*/
document.documentElement.style.setProperty('--color-primary', 'orangered');

/* HIGHLIGHT: Attributes
- In HTML: src, alt, class, id are all Attributes
- Get attributes -> logo.src ...
- Change Attributes 
*/
// NOTE: Get attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // NOTE: http://127.0.0.1:5500/AdvancedDOMAndEvents/img/logo.png (Absolute URL)
console.log(logo.getAttribute('src')); // NOTE: img/logo.png (Relative URL)
console.log(logo.className); // nav__logo

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:5500/AdvancedDOMAndEvents/#
console.log(link.getAttribute('href')); // #

// NOTE: NON-Standard <img alt="Bankist logo" class="nav__logo" designer="Jonas" />
console.log(logo.designer); // Undefined
console.log(logo.getAttribute('designer')); // Jonas

// NOTE: Change Attributes
logo.alt = 'Beautiful logo';
logo.setAttribute('company', 'Bankist'); // add attributes

// NOTE: Data Attributes -> <img date-version-number="3.0" />
console.log(logo.dataset.versionNumber); // 3.0

// HIGHLIGHT: Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
