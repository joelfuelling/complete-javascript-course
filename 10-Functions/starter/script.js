'use strict';

//? FUNCTIONS
//? FUNCTIONS
//? FUNCTIONS
/* 
//* DEFAULT parameters

function defaultStr(str = 'default') {
  console.log(str);
}
defaultStr();

// Continuing with our flight examples from file 09
// Keep pushing each booiking after each function call

const bookings = [];

const createBooking = function (
  flightNum = '***',
  numPassengers = 1,
  price = 199 * numPassengers //# Using other values to set default, why not?! You cannot call values called after this lines scope.
) {
  // Old way (ES5) to set defaults parameters using Short Circuiting
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  //% Enhanced Object literal syntax. ie., not having to write 'flightNum: flightNum,'
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};
createBooking('ORD42');
createBooking('CLE12', 5);
//% Skipping a default parameter using undefined.
createBooking('CLE24', undefined, 379.99);
createBooking('CLE48', undefined, 379.99);

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? How Passing Arguments Works:
//? How Passing Arguments Works:
//? How Passing Arguments Works:

// VALUE vs. REFERENCE

const flight = 'LH234';
const joel = {
  name: 'Joel Fuelling',
  passport: 12345,
};

const checkIn = function (flightNum, passenger) {
  // What if the flight # is changed?
  flightNum = 'Lh998';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 12345) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, joel);

console.log(flight); // Primitive type, just a string. Therefore flightNum is simply a copy of flight.
// Same as...
const flightNum = flight;
console.log(joel); //% Reference type. Here we changed passenger.name and the joel object was also affected. When we pass a reference type (object) to a function, what's copied is the reference to the object in the memory heap (08-JS Behind The Scenes). As we manipulate the passenger object in the function, it is the exact same as manipulating the joel object.
// Same as...
const passenger = joel;
console.log(passenger);

// In summary, passing a primitive type is the same as creating a copy outside of the function, so the value is simple copied.
// Passing an object to a function will change what ever is the original...

//! (COPY THEM FIRST!)
const { ...joel2 } = joel;
console.log(joel2);

//* Drawbacks of working with same object in multiple functions.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

// Changing the passport number BEFORE checkIn is called!
newPassport(joel);

// Now, rerun the checkIn function and see what the alert is. Two functions are manipulating the same object, which is creating a problem. Similar to before, the person object is being changed because it is a reference type, so 'joel' is altered in the parameter below.
checkIn(flight, joel);

//* Two terms to know: Passing by Value, (and) Passing by Reference.

// JavaScript does NOT have passing by REFERENCE, ONLY passing by VALUE. Even though it looks like it's passing by reference... So, in C++ you can pass a reference to any value instead of the value itself, even with primitives. You could pass a reference to 5, and alter it completely in C++.
//% Above, with objects, we're passing in the 'memory reference' of the object. However, it that reference is still a value that contains a memory address.

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? First-Class and Higher-Order Functions
//? First-Class and Higher-Order Functions
//? First-Class and Higher-Order Functions

//? First-Class:

// JavaScript has First-Class functions. Meaning, they are called "first-class citizens". This means that functions are simply values, they're just another "type" of object. So, there are very interesting things we can do with them, obviously.

//* Storing functions
const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

//* Passing functions as arguments.
const greet = () => console.log('Hi there!');
let btnClose;
// btnClose.addEventListener('click', greet);

//* FUNCTION METHODS.
let someObject;
counter.inc.bind(someObject);

//? Higher-Order:

// Function that receives another function as an argument, that returns a new function, or both.
//% Only possible BECAUSE of First-Class function capability

//# For example: btnClose.addEventListener('click', greet);
// The eventlistener is the Higher-Order function, where greet it the callback function, which will be called when the click event happens.

//* RETURNING functions from functions
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

// In Summary, First-Class function is actually a concept. Function are treated as values, that's pretty much it.
// However, Higher-Order funcsions are in practice as we've seen, only because the language supports first-class functions.
*/
//? Function accepting Callback Functions
//? Function accepting Callback Functions
//? Function accepting Callback Functions

// Now that we know what Higher-Order functions are let's create one.

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Let's now use the two functions above in a Higher-Order function to alter a name.

// Higher-Order function.
//% Here, fn is 'upperFirstWord' being called

const transformer = function (str, fn) {
  console.log(`String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: The ${fn.name} function`); //% All functions have methods, and even properties! One is .name, which simply returns the name of the function.
};

// Passing in 'upperFirstWord' only as a VALUE (it get's called within the function above)
transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

//# Again...

// The callback, get use to them! THEY'RE EVERYWHERE!
const high5 = function () {
  console.log('👋');
};

// The Higher-Order
document.body.addEventListener('click', high5);

// Using forEach on an array to callback high5 on each.
['Joel', 'beezly', 'bugsby'].forEach(high5);
