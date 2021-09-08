'use strict';
/* HIGHLIGHT: DOM Content Loaded
- we can now execute code that should only be executed after the DOM is available.
 */
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});

/* HIGHLIGHT: Load Event
- Fired by Window
- As soon as not only the HTML is parsed
- but also all the images and external resources like CSS files are also loaded.
- When the complete page has finished loading is when this event gets fired
*/
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

/* HIGHLIGHT: Before Unload Event
- Fired by Window
- do NOT abuse
- Created immediately before a user is about to leave a page.
- After clicking this close button here in the browser tab
- We can basically use this event to ask users if they are 100% sure that they want to leave the page.
window.addEventListener('beforeunload', function (e) {
  e.preventDefault(); // Some browser needed but not Chrome
  console.log(e);
  e.returnValue = '';
});
*/
