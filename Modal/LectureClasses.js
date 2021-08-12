// HIGHLIGHT: Project 2 ---- Modal Window -> Manipulate Classes
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
/*NOTE: limitation of querySelector: only one elements will be selected when there are multiple elements
so use querySelectorAll
console.log(btnsShowModal); 
*/

// NOTE: remove class 'hidden' to show modal = modal.style.display = 'block' (not recommend)
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// NOTE: add class 'hidden' back to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// NOTE: querySelectorAll -> array -> can do anything using for loop
for (let i = 0; i < btnsShowModal.length; i++) {
  // console.log(btnsShowModal[i].textContent);
  btnsShowModal[i].addEventListener('click', showModal);
}

// NOTE: do not call function here because we only want it called when we click the button
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//HIGHLIGHT: keyboard event (global event)
/* NOTE: listen all the events -> e stands for 'event' 
-> pass the event object as an argument when 'keydown' event happens
*/
document.addEventListener('keydown', function (e) {
  // console.log('a key was pressed');
  // console.log(e.key); NOTE: event object -> show which key we pressed (keyboard event in this case)
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
