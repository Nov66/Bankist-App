/* HIGHLIGHT: Refactoring the code -> avoid duplicate code -> Reuseable
can also refactor the functionality 
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// NOTE: Refactor repeat code through function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';

    displayMessage('No Number!'); // NOTE: use readable code

    // When player wins -> guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🍾 Correct Number!';
    displayMessage('Correct Number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; // NOTE: if two words use camelCase
    document.querySelector('.number').style.width = '30rem';

    // Highest Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // NOTE: use Ternary Operator to avoid repeat code
      displayMessage(guess > secretNumber ? 'TOO HIGH' : 'TOO LOW');

      /*
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'TOO HIGH' : 'TOO LOW'; 
      */

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
    else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
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
  */
});
