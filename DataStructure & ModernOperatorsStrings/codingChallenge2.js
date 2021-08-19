'use strict';
/*
Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

{ Gnarby: 1, Hummels: 1, Lewandowski: 2 }
*/
const game = {
  team1: 'Bayern Munich',

  team2: 'Borrussia Dortmund',

  players: [
    [
      'Neuer',

      'Pavard',

      'Martinez',

      'Alaba',

      'Davies',

      'Kimmich',

      'Goretzka',

      'Coman',

      'Muller',

      'Gnarby',

      'Lewandowski',
    ],

    [
      'Burki',

      'Schulz',

      'Hummels',

      'Akanji',

      'Hakimi',

      'Weigl',

      'Witsel',

      'Hazard',

      'Brandt',

      'Sancho',

      'Gotze',
    ],
  ],

  score: '4:0',

  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],

  date: 'Nov 9th, 2037',

  odds: {
    team1: 1.33,

    x: 3.25,

    team2: 6.5,
  },
};
// 1.
// const scored = game.scored.entries(); // game.scored.entries()
// console.log(scored);
for (const [i, player] of game.scored.entries()) {
  // NOTE: entries for array
  console.log(`Goal ${i + 1}: ${player}`);
}
// 2.
const odds = Object.values(game.odds);
console.log(odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
console.log(`The average odds is ${sum / odds.length}`);
// 3.
const odd = Object.entries(game.odds);
console.log(odd);
for (const [team, probability] of Object.entries(game.odds)) {
  console.log(team);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr}: ${probability}`);
}
// 4.
const scorers = {};
console.log(game.scored);
for (const player of game.scored) {
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
