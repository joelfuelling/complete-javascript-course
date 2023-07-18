// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

// GOOD LUCK 😀

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())]; //% Create a new array and unpack it ...
console.log(typeof events);

// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
gameEvents;

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

let newTimes = Array.from(gameEvents.keys());
let sum = 0;
for (let x of newTimes) {
  sum += x;
}
sum = Math.trunc(sum);
let avg = sum / newTimes.length;
let minute = 90 / avg;
minute = minute.toFixed(2);
console.log(`An event happened, on average, every ${minute} minutes`);
//! WRONG, I was calculating using for average, just not correct -  solution below

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//% Calculate using the actual game length, without previously knowing

let gameMinutes = [...gameEvents.keys()];
const gameLength = gameMinutes.pop().toFixed(2);

console.log(
  `An event happened, on average, every ${gameLength / gameEvents.size} minutes`
);
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

for (let [minute, action] of gameEvents) {
  //% Desctructure the key/value pair
  console.log(
    minute <= 45
      ? `[FIRST HALF] ${minute}: ${action}`
      : `[SECOND HALF] ${minute}: ${action}`
  );
}
//! - OR
// const half = minute <= 45 ? "FIRST" : "SECOND";
// console.log(`[${half} HALF] ${minute}: ${action}`);
