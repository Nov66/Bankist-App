'use strict';
// HIGHLIGHT: Handling Click Event
/* NOTE: pass argument to method 'addEventListener' (1. first pass the type of the event, in 
this case is 'click' 2. Then tell the event what to do -> function) 
-> 2 arguments: 'click' and a 'function (function also is a value)' handle the event (event handler). 
*/

// NOTE: it is goof yo keep variable in a code
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // HIGHLIGHT: state variable

document.querySelector('.check').addEventListener('click', function () {
  // Specify what should happen
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess); -> 5, 'number' NOTE: usually the thing we get from user input is String

  // First Check if there is no value

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🍾 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    //HIGHLIGHT: Manipulate CSS styles: always needs to specify String
    document.querySelector('body').style.backgroundColor = '#60b347'; // NOTE: if two words use camelCase
    document.querySelector('.number').style.width = '30rem';

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
