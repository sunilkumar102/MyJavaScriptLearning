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
//task 1 using destructuring
const [players1, players2] = game.players;

console.log(players1, players2);

//task 2
// rest operator
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// task 3
const allPlayers = [...players1, ...players2];

console.log(allPlayers);

//task 4

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

// task 5
// nested destructuing

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// task 6
const printGoals = function (...players) {
  console.log(players, players.length);
};
printGoals(...game.scored);

// coding challenge 2

//task -1
for ([i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${el}`);
}

//task -2

// const entriess = Object.entries(openingHours);
// console.log(entriess);

// for (const [key, { open, close }] of entriess) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

const entries = Object.entries(game.odds);
console.log(entries);
let sum = 0;
for (const [key, values] of entries) {
  sum = sum + values;
  console.log(key, values);
}
console.log(sum / entries.length);

// task - 3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}  ${odd}`);
}

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
