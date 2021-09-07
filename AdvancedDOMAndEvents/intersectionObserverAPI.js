'use strict';
/* HIGHLIGHT: Intersection Observer API
- IntersectionObserver() -> CallBack function and Object Options
 */
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
/* NOTE: When Target here (section1) is intersecting the Viewport at 10%
obsCallback function will get called no matter scrolling down or up
- Viewport -> root: Target Element
- 10% -> threshold: Percentage of Intersection at which the Observer Callback will be called
CallBack function will get called with 2 arguments
1. entries
- Can have multiple threshold -> Array of threshold entries
2. observer itself
*/
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null, // Target Element
  /* NOTE: 0% here means CallBack will trigger each time that the Target Element moves completely out of the View
  And as soon as it enters the view
  - Because CallBack function will be called when the threshold is passed when moving into the view
  and moving out of the view
  - If set 1 means CallBack function will be called 100% of the target is actually Visible in the viewport
  */
  threshold: [0, 0.2, 0.5],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section2);
