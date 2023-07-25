/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Array themselves are objects so we can call methods on them.

//? Simple array tools
//? Simple array tools
//? Simple array tools

//* Slice - Returns a new copy with the extracted parts.

// 1st argument is starting index to create new array starting at.
//* If no 2nd argument, it will slice to the end of array.
// 2nd argument is the index to slice UP TO, BUT NOT INCLUDE

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(2)); // Returns new array made up of 2nd index to end of array
console.log(arr.slice(3, 4)); // ... 3rd index UP TO but DONT INCLUDE 4th index.
// Slicing from the back we just use a negative index, where -1 is the last index. We can also reference a negative index in various other ways.
console.log(arr.slice(-3)); // ... last 3 indexes of the array
console.log(arr.slice(-1)); // ... last index of the array
console.log(arr.slice(1, -2)); // ... 1st index UP TO but DON'T INCUDE 2nd from last index.

// Creating a shallow copy, .slice()
console.log(arr.slice());
console.log([...arr]);

//* Splice - CHANGES THE ORIGINAL ARRAY!!!
//! Splice - CHANGES THE ORIGINAL ARRAY!!!

// 1st argument is the same as splice()
//% 2nd argument is the 'deleteCount' parameter, or the # of indexes to remove from the original array starting at the index of the 1st argument.
// Below we have a new array with the previous array indexes starting from 2 to the end. The orriginal 'arra' is now jsut [ 'a', 'b']

console.log(arr.splice(2));
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// Removing the last elememnt.
arr.splice(-1);
console.log(arr);

//% 2nd argument is the 'deleteCount' parameter, or the # of indexes to remove from the original array starting WITH the index of the 1st argument! Below, we're starting the index 1, them removing 2 indexes from arr,. So, b and c are removed after a.
arr.splice(1, 2); // "start at index 1 and remove 2 indexes from arr"
console.log(arr);

//* REVERSE - Actually mutates the original array!

arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let arr2 = ['j', 'i', 'h', 'g'];
console.log(arr2.reverse());

//* Concat - Adding arrays together. Does NOT mutate.

const letters = arr.concat(arr2);
console.log(letters);

// Or.. Good ol' spread operator! Does not mutate anything.
const letters2 = [...arr, ...arr2];
console.log(letters2);

//* Join - Creates a string with a prefedined separate

console.log(letters.join(' - '));

//? The NEW at method
//? The NEW at method
//? The NEW at method

const atArr = [11, 23, 52];
console.log(atArr[0]);
console.log(atArr.at(0));

// Very smiliar to bracket notation. However, let's say we wanted to get the last element of the array when we don't know the length, .at(-1) is much cleaner code.

console.log(atArr[atArr.length - 1]);
console.log(atArr.slice(-1)[0]);
console.log(atArr.at(-1));

//* Which to use? It depends! If you're need the end, or you're at the end of an array, .at() will work well. You can also chain methods together with .at().
// Grabbing a quick element, using [] is fine.

//* .at() also works on strings!

const string = 'Joel';
console.log(string.at(0));
console.log(string.at(-1));

//? Looping arrays: FOREACH
//? Looping arrays: FOREACH
//? Looping arrays: FOREACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Create an 'of' loop for comparison.
// Math.abs() removes any negative sign.
for (const movement of movements) {
  console.log(
    movement > 0
      ? `You deposited ${movement}`
      : `You removed ${Math.abs(movement)}`
  );
}

console.log('----- FOR EACH -----');

//* forEach method takes a callback function to iterate over each index.
//* foreach makes the above easier.

movements.forEach(function (movement) {
  console.log(
    movement > 0
      ? `You deposited ${movement}`
      : `You removed ${Math.abs(movement)}`
  );
});

// ITERATIONS VISUALIZED:
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

//% What if we need a counter?
//% as forEach is being called on movements, it passes in the current element of the array, the index, AND the entire array we are looping. So, we can specifcy them in our parameter list IN THE ORDER of...
//% Current Element
//% Current Index
//% The entire Array.
//# We do not need to use index, or the array, but we can if needed.

let total = 0;
movements.forEach(function (mov, i, arr) {
  total = total + arr[i];
  console.log(
    mov > 0
      ? `Index ${i}: You deposited ${mov}. Total balance is: ${total}`
      : `Index ${i}: You removed ${mov}. Total balance is:  ${total}`
  );
});

//* When to use forEach vs. for of
//% You cannot break out of a forEach loop, so continue and break do not work. It will ALWAYS loop over the entire array.
//% 'for of' will allow you to continue/break.

//? Using forEach with Maps and Sets
//? Using forEach with Maps and Sets
//? Using forEach with Maps and Sets

//? Maps

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  // Similar to arrays(), the value (element), then key (index), then the entire map (arr).
  console.log(`${key}: ${value}`);
});

//? Sets

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`); //
});

//* The key is exactly the same as the value, since sets dont have Keys, or Indexes, so no key would even have value... 'key' is only left in here to keep the forEach structure the same as the others. But, we can't have duplicate values so we set it to "_", a "throwaway" variable we won't use
*/

//? Data transformations with Map, Filter, and Reduce
//? Data transformations with Map, Filter, and Reduce
//? Data transformations with Map, Filter, and Reduce

//* MAP - Similar to forEach, but more useful! Map creates a brand new array based on the original (so you don't have to start off by copying it).
// - Map applies a callback function on each INDEX, just like forEach, then applies the result of the callback function to that index of the soon to be returned array.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// Lets converts from Euro to USD.

const movementsUSDMap = movements.map(function (mov) {
  return mov * euroToUsd;
});

const anotherMap = movements.map((mov, i) => {
  if (Math.abs(mov * 2 > 1000)) console.log(`${mov} times 2 is over 1000`);
  return mov;
});

console.log(anotherMap);

//* MAP Arrow function challenge: (NAILED IT!)
// EVERYTHING AFTER => is the "return",

const movementsArrow = movements.map((mov) => mov * euroToUsd);

// console.log(movements);
console.log(movementsUSDMap); //% A new array with each index/mov multiplied by euroToUsd
// console.log(movementsArrow);

// Just for fun, let's do the same thing with a for of loop.

const movementUSDFor = []; // the "total" needs created outside the loop first
for (const mov of movements) {
  movementUSDFor.push(mov * euroToUsd);
}
console.log(movementUSDFor);

//* Map also gets access to the element, the index, and the entire array, just like forEach.
// % THE BIG DIFFERENCE IS with forEach, the console log was happening on each iteration (a "side effect"). With Map, we add up all the returned strings INTO AN ARRAY, avoiding creating a side effect.

const movementsDescriptions = movements.map(
  (
    mov,
    i,
    arr // Not using arr.
  ) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

//* FILTER - Used to filter for elemetns in the original array that satisfy a certain condition. Returns a new array

// Let's use a callback 'function' to specify the condition for our filter.

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0; // boolean value is what's needed
});
console.log(deposits);

// for of version. Fine, but you need to declare the global variable which isn't entirely necessary. Cannot continuoulsy chain methods...
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

//! CHALLENGE: Recreate the above two functions for withdrawals without peaking... I had to look where if the went because I'm not use to such straight line syntax, but it makes more sense when you start working with it more.
const withdrawals = movements.filter((mov, i, arr) => mov < 0);

console.log(withdrawals);

const withdrawalsFor = [];
for (const mov of movements) if (mov < 0) withdrawalsFor.push(mov);
console.log(withdrawalsFor);

//* Reduce - Boil down all the elements of original array into ONE SINGLE VALUE. Add them all up, pull out "this is here x times"

//! SEE STARTER CODE FOR 'calcPrintBalance'FUNCTION TO BE USED IN BANKIST APP.

// Regular function version

const reduceFunc = function (movements) {
  return movements.reduce((acc, cur) => (acc += cur), 0);
};
console.log(reduceFunc(movements));

// accumulator (prev below) + current element, returns the "total sum" of all elements. Imagine a snowball that gets bigger as it rolls down a hill.
// The returned value is the value of the reduction, no new array.
//% 'Accumulator(acc)' - This is the snowball! It starts as 0, then changes as we go through each element.
// curr - The current value of the current index of which the reduce loop is currently on.
// i - 0, 1, 2, ...
// arr - [movement1,movement2, ...]

//* Reduce also has a final parameter, the value of which the accumulator starts. It is placed right outside the reduce  return block {}, 0. THIS IS OPTIONAL.

//# My version without watching... Nice arrow :)
const globalBalance = movements.reduce((acc, curr, i, arr) => (acc += curr), 0);
console.log(globalBalance);

// For of version
let balance2 = 0; // Not ideal...
for (const mov of movements) {
  balance2 += mov;
}

//% Getting the maximum value from the movements array using reduce.

// const findMax = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc
//   else return mov
// }, movements[0]);

const findMax = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov), // Set the 'acc' to the current movement if the acc is less that the current movement.
  movements[0] // Set 'acc' to start at 1st index of array.
);
console.log(findMax);

//? Using Map and forEach to compute usernames for Bankist users
//? Using Map and forEach to compute usernames for Bankist users
//? Using Map and forEach to compute usernames for Bankist users

//! GO TO BANKIST starter FILES.
//! GO TO BANKIST starter FILES.
//! GO TO BANKIST starter FILES.

//? Chaining all 3 methods together!
//? Chaining all 3 methods together!
//? Chaining all 3 methods together!
//! ALSO SEE 'dogstudy' function UNDER 'challenges/arrays' folder

// Let take all the movements deposits, then convert them from euros to dollars, then add them all up.
//* Using the above variables and functions where we can (euroToUSD)

const totalUSDdeposit = movements
  .filter((mov) => mov > 0) // get deposits only
  .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => Math.trunc(acc + mov), 0); //

console.log(totalUSDdeposit);
