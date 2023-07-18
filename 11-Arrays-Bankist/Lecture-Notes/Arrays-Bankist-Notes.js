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
