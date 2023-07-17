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

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

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

//* Higher-Order function.
// Here, fn is 'upperFirstWord' being passed as argument.

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
function high5() {
  console.log('👋');
}

// The Higher-Order
document.body.addEventListener('click', high5);

// Using forEach on an array to callback high5 on each.
['Joel', 'beezly', 'bugsby'].forEach(high5);

//* Why are Callbacks so helpful?
//* 1 - Waaay easier to split up and reuse our code.
//* 2 - Allows us to abstract out our code. Meaning, we create a level of abstraction, or we hide the detail of some certain code implementation because we just don't need to know/see what's going on with that detail. So, we can think of problems at a higher level.
// Our transformer string doesn't care how to transform the string, just that it has to do it. So, we abstract the other two functions and pass them as fn.
// So, our main transformer function is left to do just what it needs to do, and leaves the other parts to the other two functions. We'll discuss this more when we get to OOP.

//! Let's make our own

const redLight = function (str) {
  console.log(
    str !== 'red' ? `${str} is now ${(str = 'red')}` : `${str} is already red!`
  );
};

const brightLight = function (str) {};

const lightChanger = function (color, fn) {
  fn(color);
};

lightChanger('yellow', redLight);

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Function RETURNING functions
//? Function RETURNING functions
//? Function RETURNING functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//% Our 1st function 'greet' returns a new function that we store into the variable greeeterHey below, so we can call passing 'name' in as the argument, just it's setup in the greet function initially.

const greeterHey = greet('Hey'); // The 'greeterHey' value is now a function. The return value being:
//   function (name) {
//     console.log(`${'greeting'} ${name}`);
//   };
greeterHey('Joel');
greeterHey('steph');

//% How does the 'name' argument get translatd to the 'Joel' argument passed by greeterHey? This is because of a closure. The returned inner function is immediately invoked with the argument 'Joel', which sets the name parameter to 'Joel'

greet('Hello')('Joel'); // This is essentially the same as 'const greeterHey = greet('Hey')', then 'greeterHey('Joel')' becuase the returned inner function is immediately invoked with the argument 'Joel', which sets the name parameter to 'Joel'
//! Challenge, rewrite the above function as an arrow function (NOTE: It looks odd)
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Joel');

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? CALL and APPLY methods.
//? CALL and APPLY methods.
//? CALL and APPLY methods.

// Lets go back to 'this' keyword, and learn how and why to set it manually.

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    const airline = this.airline;
    const flightInfo = `${this.iataCode}${flightNum}`;
    const createAndPushBooking = this.bookings.push({
      flight: `${flightInfo}`,
      name,
    });
    console.log(`${name} booked a seat on ${airline}, flight ${flightInfo}`);
    createAndPushBooking; // Add each new 'book' object to the bookings array
  },
};

lufthansa.book(1234, 'Joel F.');
lufthansa.book(635, 'Mike Smith');
console.log(lufthansa.bookings);

//% Let's say they created a new airline. We can take the book function and store it in an external method, but this will change the 'this' property to undefined for the new 'book' function!

const book = lufthansa.book;

//! DOES NOT WORK
// book(23, 'Sarah'); // Why? 'book' is no longer the method above, its just a separate function/copy. So, 'this' is now undefined.

//* We need to tell JavaScript Explicity/Manually what 'this' is when it's undefined.

//* Call
// .call() is one of the methods belonging to functions in general.
// Below, we're reassigning 'this' to eurowings.

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

book.call(eurowings, 23, 'Sarah Williams');
//% The 1st argument is what we want 'this' to point to, the eurowings object, followed by the 2 input parameters for 'book'.

// We can also us this method on the lufthansa object, since we can now decide what 'this' is using .call()
book.call(lufthansa, 239, 'Johnny apple');
console.log(lufthansa.bookings);

// We can do this all day. But, the object structure must match the object of whatever method you will be using (lufthansa, in this case, since 'book = lufthansa.book')
const swiss = {
  airline: 'Siwss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 244, 'Katy Harry');
console.log(swiss);

//* Apply - Nearly the same as Call, except instead of receiving multiple parameters after the 'this' declaration, it takes an array of arguments.

const flightData = [345, 'George Wilson'];

book.apply(swiss, flightData); // in .call(), flightData = '23, "Mary Cooper"', as 2 separate parameters intead of an array.
console.log(swiss);

//% OR - Just spread out the array within .call(). Same thing, using newer/better JavaScript.
book.call(swiss, ...flightData);

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? BIND
//? BIND
//? BIND - Allows us to explicity DEFINE the THIS KEYWORD in ANY FUNCTION.

// Bind does not immediately call the function.
// It returns a new function (below, bookEW) where the this keyword is bound. So, it's set to whatever value we pass into .bind()  .

// Let's say we need to use the book function for Eurowings EVERYTIME

const bookEW = book.bind(eurowings);
//% beekEW = (this = eurowings)
bookEW(23, 'Kyle Williams');

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookLH(123, 'caitlin plachek');
bookLX(533, 'John Doe');

//? Partial Application
// Specifying parts of the argument beforehand.

// In the call and bind method, we can actually pass multiple arguments beside the this keyword assignment. Then, those arguments will be predetermined on each call of the function (ie, setting the function parameters as a default).

const bookEW23 = book.bind(eurowings, 23); // Here, we're setting the 1st argument 'flightNum' as 23. So, we only need the name. This would be for specific passengers for this flight, not general passenger information (ie, before a flight is purcased/assigned/etc.)
bookEW23('Joel Fuelling');

//* With Event Listeners
// Create the planes = 300 key value pair for the lufthansa object first, so we can add to it when we hit the 'buy new plane' button.
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
  // console.log(this);
};

//# With event listeneres, the 'this' element always points to the element on which it is attached. That wont work for what we need to do.
//# We need the 'this' of the handler below to point to the lufthansa object itself rather than the defaulted button 'buy' button HTML element. So, we manually bind the lufthansa object to it.
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//* More Partial Application.

// Using an arrow function, there is no binding of this.
// We COULD do 'value = .23' as a default, but that has different implications from what we're trying to achieve below
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// What if there's a tax we use all the time? Well, we wouldn't care about the 'this' keyword, in fact it's not even in the arrow function. So, we just use 'null' with bind, it could be anything since "nothing will happen with it" but null is standard. Then, we set the rate to .23.

const addVAT = addTax.bind(null, 0.23);
// Same as...
// let addVAT1 = value => value + value * 0.23;

// Now, do this without using Bind or an arrow function! We did this before with 'greet' and greeterHey', above.
//! Challenge - Repeat the returned function approach above with the tax function.
// I had to glance at the above note, that was a few hours ago lol!

function addTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}
const addVAT2 = addTaxRate(0.23);

//% Both functions have the same return value.

console.log(addVAT(100));
console.log(addVAT2(100));

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Immediately Invoked Functions Expressions.
//? Immediately Invoked Functions.
//? Immediately Invoked Functions.

//? IIFE

// Functions that execute once, but are never needed again.
// Below, we're wrapping the function in (), then immediately invoking ()

(function () {
  console.log('this will never run again');
})();

(function () {
  const isPrivate = 23;
  console.log(`Will this run as well? variable is ${isPrivate}!`);
})();

//Arrow function are very common IIFE
(() => console.log('this will also never run again'))();

//* Why is this needed? Well, when we create a new function a new scope is created. Above we don't have access to anything defined in the functions.

// Data encapsulation and Data privacy are extremely important. This method helps prevent over writing and changing data that is very sensitive.
// Here, you can sort of think about it like "We're hiding the scope because we don't want it accessed anywhere else"

// Let and Const also create their own scope.
//* Scope is also defined to the function block {} - This is the modern way of locking scope/variables away, not using IIFE.

//! var will allow - NOT - G00D.
{
  {
    {
      const isPrivate = 23;
      var notPrivate = 46;
    }
  }
}
console.log(notPrivate);

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? CLOSURES
//? CLOSURES
//? CLOSURES

//* - CLOSURE - "The variable environment attached to the function exactly as it was at the time and place the function were created"
// Closures bring together a lot of what we've learned already. Specifically, execution context, the call stack, and the scope chain.
// A closure is not a feature we explicity use. It happens automatically in certain situations that we need to recognize (below)

//* Calling 'secureBooking()' will return the function with ++ and console below, and passengerCount, and store them in the 'booker' variable

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passeners`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
//#  Call it 3 times - Wait...How is this able to increment the passengerCount variable that's accessed inside a function that (purple note below) will be removed from the stack once it's completed? Because of closures!

//* CALL STACK - Order in which functions were Called.
// EC: Execution Context.

//* secureBooking() EC:
// secureBooking() { passengerCount = 0} //% This will be popped off the stack after secureBoooking() has done it's job. IT'S GONE! (see note above))
//* Global EC:
// secureBooking = <f>
// booker = <f>

//* SCOPE - Order in which functions are written in the code

//* Global Scope:
// secureBooking = <f>
// booker = <f>
//* secureBooking() scope:
// passengerCount = 0
// .............
// secureBooking = <f>
// booker = <f>

//? Let's look at the closure more in detail to see what it actually is.

// 1st, a new EC is created and place on top of the call stack.

//* booker() EC:
// <empty> - Because, there are no variables declared in the function.

// What about scope chain? booker is in the global context, its simply a child scope of the global scope.
//% How will the booker function access the passenger count variable? It's nowhere to be found in the scope chain.

//* booker() scope
// <empty>
// .............
// secuireBooking = <f>
// booker = <f>

//? Closures Summary:

// As far as the execution of the booker function goes. It tries to increase the passengerCount by 1, however that variable is "not in the current scope"...
// So, JS immediately looks into the closure to see if the variable is there (BEFORE looking at the scope chain). So, the closure has priority over the scope chain.

//* Formal: "Closed-over variable environment of the execution context in which a function was created, even AFTER that execution context is gone.

//* Less Formal: "Any function always has access to the variable environment of the execution context in which the function was created, or, the parent function even AFTER that parent function has returned. The function keeps a reference to its outer scope, with PRESERVES the scope chain throughout time"

//* Less Formal: "Makes sure that a function doesn't loose connection to VARIABLES THAT EXISTED AT THE FUNCTIONS BIRTH PLACE"

//* You can think of it like a backpack that JS carries around to access the varaibles stored in the closures as needed.

//* YOU CANNOT reach into a closures and take variables from it. It is not an accessible object to the coder, only to the engine.

//% console.dir() will allow you to view the object/functions scopes in CHROME DEV TOOLS
//% Something wrapped in [[ ]] (in dev tools) means its an internal property that we cannot access, ie, the closure variables (passengerCount = 3)
// 'addVAT2()' and addTaxRate also create a closure for 'addVAT2' to be able to use the environment that's "closed" once addTaxRate returns the function to calculate the tax.

console.dir(booker);
*/
//? 3 MORE EXAMPLES OF CLOSURES
//? 3 MORE EXAMPLES OF CLOSURES
//? 3 MORE EXAMPLES OF CLOSURES

//? This Is Very Important Stuff to Know!

//* We don't need to return another function from a function to create a closure (remember, it's only dealing with scopes!)

//* Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // 46. Proves that f() 'Closes' over any variables of the execution context in which it was defined...
//% EVEN when the variables itself was not even defined in the function itself.
// f was created in the global scope.
// then, f was assigned the function within g(), including 'const a = 23' so it can access it after g() has already returned.
//% The 'a' variable is inside the f() backback now.

//* NEXT LEVEL (Example 1)

//* Below, the closure of f is being "reborn" with 'b = 777' as the preserved scope, no longer 'a = 23' as it was originally (console.dir()s below will show this in detail)

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//! Below, we're reassigning f (previosly assinged to g) to h() now
h();
f(); // NOT the same f() as the one 2 lives above. '1554' output proves that f also closed over the new environvment variable of h().
console.dir(f);

//* Example 2 - Using a timer
//* setTimeout() is executed completely separate from the boardPassengers(180, 3) call, 3 seconds later. It is being accessed from the closure (ie., being able to access all the variables of the environment in which it was created. n, wait, perGroup)

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`); //* executes first.
};

const perGroup = 1000;
//* Again, the closure has priority over the scope chain!
// If it didn't, perGroup would be 1000 as defined above, and not n / 3 which is defined/stored in the closure. 'const perGroup = n / 3' is being closed over so the scope is "being kept alive". If you removed the perGroup within the function, then 'const perGroup = 1000' would be used.
boardPassengers(180, 3);
