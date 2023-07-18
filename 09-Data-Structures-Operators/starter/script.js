'use strict';

//* import Array.sort context.
// https://www.adityathebe.com/array-sort-javascript-pitfall/
//? Use to structure high level sections
//* Sections of high level sections
//! Specific #'d sections. Used for NEED-TO-KNOW and contextually important notes.
//# INTERESTING notes/1 level above dark green
//% IMPORTANT notes/2 levels above dark green

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//* A NEW array with all the weekdays - Used below around line 730
const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    // Instead, of thur, we use [weekdays[3]]
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[2 * 3 - 1]]: {
    // Just to show how we can access the weekdays array above in various ways
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //* ES6 Enhanced Object Lieterals:
  // openingHours: openingHours, - The "old" way, before ES6. See how this would get confusing with the same name?
  //* The new way, 'openingHours'
  openingHours,
  // order: function (starterIndex, mainIndex) { - The "old" way, before ES6.
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  //* The new way, 'order() {}'
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //# No destructuring yet.
  },

  //* orderDelivery method is called outside this block, below, in "restaurant.orderDelivery" where the required variable are passed in.
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    //# Now were destructuring!
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //Pasta always needs to have exactly 3 ingredients.
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
    console.log(
      `Your main ingredient is ${mainIngredient}. ${
        otherIngredients.length === 0
          ? ''
          : `You also chose ${otherIngredients}`
      }`
    );
  },
};

//* We created another method to PASS AN OBJECT into the function as an argument with the 4 arguments..
// The function then immediatelly destructures the object to successfully console log the input.
/* 
restaurant.orderDelivery({
  time: '22:30',
  address: 'vai del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// See console.log for default outputs.
restaurant.orderDelivery({
  address: 'vai del sole, 21',
  starterIndex: 1,
});


//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Destructuring arrays.
//? Destructuring arrays.
//? Destructuring arrays.

// Traditional array access, usign the index []

const arr = [2, 3, 4];
const a1 = arr[0];
const b2 = arr[1];
const c3 = arr[2];

//% Destructuring Arrays
// It looks like an array, but it's not...
// We're basically "unpacking" it.

const [x, y, z] = arr; // !the []'s on the left side of the equals show desctructuring the arr array. When they ( or {}) show up on the left side of the equals sign, JS knows to perfrom destructuring
//# Original array is not affected what so ever.
console.log(x, y, z);
console.log(arr);

//* let's 'grab' some elements and name them first and second from the categories.restuarunts up top.
const [first, second] = restaurant.categories; //! Similar to above, we're physically putting "first, second" in the the 1st and 2nd index spots within the destructuring brackets, to then grab and assign the variable name 'first' to restaurant.categories[0], and 'second to restaurant.catgeories[1]
console.log(first, second);
// first = Italian
// second = Pizzeria

//% What if we want to access the 1st and 3rd items from restaurant.categories?
//% We leave a blank spot to "skip" the desired index by putting " ,". In this case, were skipping the 2nd index location.
//# This is great if we don't need to make variables for a bunch of things we might not use that much
const [xx, , zz] = restaurant.categories;
console.log(xx, zz);
// first = Italian
// third (zz) = Vegetarian

//% Let's say the owner wanted to switch the main and secondary category from Italian and vegtarian, to vegetarian and Italian respectively.
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary)

//% With destructuring, we create a new array with the two variables inverted!
[main, secondary] = [secondary, main];
console.log(main, secondary);

//! CHALLENGE - Have a function return an array of variables, then immediately destruct it in some form.
// Whats needed to setup a returned array?
// 1 - a Loop with a push for each index

const chlgArr = [2, 4, 17, 6, 2, 3, 5, 7, 9];

const destructReturn = function (arr) {
  const newArray = [];
  arr.forEach(arrIndex => {
    newArray.push(arrIndex);
  });
  // If the result of a - b is negative, it means a is less than b, and a should come before b in the sorted array... etc, visa versa. 0 won't move.
  newArray.sort((a, b) => a - b);
  const [firstIndex, lastIndex] = [newArray[0], newArray[newArray.length - 1]];
  console.log(
    `The first index in the newly created 'newArray' is ${firstIndex}, and the last index is ${lastIndex}`
  );
  return newArray;
};
destructReturn(chlgArr);

//! --- FROM ABOVE --- !//

console.log(restaurant.order(2, 0));
// Let's destructure the garlic bread and pizza (2,0) below.

//% Receive 2 return values from a function within in an object.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//* What if we have a nested array?
const nested1 = [2, 4, [5, 6]];
// const [i, , j] = nested
// console.log(i,j)

const [i, , [j, k]] = nested1; //! Destructuring WITHIN destructuring
console.log(i, j, k); //% 2 5 6

//! CHALLENGE!
const nested2 = [12, x, [true, false, [3, 4, 5, [1, 2]]]];
const [, , [jj, , [ll, , , [o, t]]]] = nested2; //! Destructuring WITHIN destructuring
console.log(jj, ll, o, t); //% true, 3, 1, 2

//* Default Values
// Setting default values for the variables WHEN WE ARE extracrting them
//% When we don't know the length of the array :)

// Default value
// [8,9] // Pretend we don't know the contents.
const [p1, q1, r1] = [8, 9];
console.log(p1, q1, r1); //# Output: 8, 9, undefined

//% Instead...
const [p = 1, q = 1, r = 1] = [8, , 9];
console.log(p, q, r); //# Output: 8, 1, 9

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Destructuring Objects.
//? Destructuring Objects.
//? Destructuring Objects.

// Easy, just use {}

//* Let's destructure restaurant
// Order of the elements does not matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//! What if we want the variable names to be different from the property names?
//! Super helpful when pulling API information, or you want there to be a default!

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); //% exact same variables, with new names!

//* Default values
// similar to arrays
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // the deafult value [], and the starters. //% without the 'menu = []' default set, it would be undefined

//* Mutating variables when destructuring objects.

let a = 111;
let b = 999;
let obj = { a: 23, b: 7, c: 14 }; //! The ; is necessary here. You MUST separate the statements in this case.
({ a, b } = obj);
console.log(a, b);
//  {aa,bb} = obj  // wont work, JS expects a code block. But you cannot assign a code block to something.
//% To fix this '{ a, b } = obj', we wrap the expression in (), knows as a grouping operator rather than a destructuring assignment. ({ a, b } = obj)

//* Nested Objects - Opening hours - already stored in a variable.

// Pulling fri object out of openingHours object.

//% further destructuring of fri, within desetructuring openingHours.

1 - openingHours is an object that contains nested objects.
2 - fri is one of the nested objects within openingHours.
3 - By using {fri: {...}}, we are extracting just the fri object from openingHours.
# The curly braces {} on the left-hand side of the assignment indicate that we want to destructure properties from the openingHours object.
4 - Then, within {...}, we are destructuring the fri object further.
5 - open: oh means we are extracting the open property from fri and assigning it to a variable called oh.
6 - close: ch means we are extracting the close property from fri and assigning it to a variable called ch.
# The colon : separates the original property name (fri) from the variable name we want to assign the value to. In this case, we assign the value to two variables: oh and ch.
7 - So in the end, oh will contain the open value from openingHours.fri, and ch will contain the close value from openingHours.fri.
8 - Then we simply log those two variables to the console.
9 - So in short, it's a concise way to extract deep values from a nested object by destructuring at multiple levels.

const {
  fri: { open: oh, close: ch }, // 2,3,4,5,6
} = openingHours; // 1
console.log(oh, ch); // 7,8
// 9

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? The Spread operator
//? The Spread operator
//? The Spread operator

// Similar to destructuring, except...
//% it takes all the elements from the iterable, and DOES NOT create new variables.
// Can be used on ANY iterable items (and objects, though they are "non-iterable")
//% Array, String, s, Sets, (others for later)

// The regular way of adding to parts of an array to another, an array literal.
const spreadArr = [7, 9, 12];
const badNewArr = [10, 11, spreadArr[0], spreadArr[1], spreadArr[2]];
console.log(badNewArr);

//* Using the spread operator to create a new array variable from an array.
//! SPREAD because on right side of the =
let newSpreadArr = [...badNewArr];
console.log(badNewArr);

//* Pulling out the array elements into individual strings.
console.log(...newSpreadArr);

//* Creating a shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
// Creating a new menu array and adding item.
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//* Joining arrays
// Create a new array and spread each desired array into it.

const arrx = [1, 2, 3];
const arry = [4, 5, 6];
const menuXY = [...arrx, ...arry];
console.log(menuXY);

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2); // Array wth all food items.

//# Strings
const xn = 'Joel';
let joelArrayWithSpread = [...xn, , 'F.'];
console.log(...xn); // J o e l
console.log(joelArrayWithSpread); // ['J', 'o', 'e', 'l']
//console.log(`${...xn} Fuelling`) //! Error - Unexpected token '...'. This is not a place that accepts multiple values separated by a comma.

//% Lets add a new method to restaurant! (see object)

//* Real world example.
// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'),
//    prompt("Ingredient 2?"),
//     prompt("Ingreedient 3?")
//   ]
// console.log(ingredients)

// restaurant.orderPasta(...ingredients)

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Spread operator with Objects.
//? Spread operator with Objects.
//? Spread operator with Objects.

//? DESTRUCTURING

//# Since ES 2018, spread also works on objects even though they are not iterables.
// A new restaurant object, //% Add a founder!

const newRestaurant = { ...restaurant, founder: 'Joel' };
console.log(newRestaurant);
// Or... //! ORDER DOESN'T MATTER
const newRestaurant3 = {
  founder: 'Joelji',
  ...restaurant,
  name: 'Luigies Italiano',
  foundedIn: 1964,
};
console.log(newRestaurant3);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);

//% Log the 'name's, and notice they are all different!
//% Why? Each object get's its own memory address (0001, and 0002 for example) in the stack, so the names are being assigned to separate objects.
console.log(newRestaurant3.name);
console.log(restaurantCopy.name);
console.log(restaurant.name);

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? The Rest Pattern and parameters
//? The Rest Pattern and parameters
//? The Rest Pattern and parameters

//* DESTRUCTURING

//* Arrays
//* The rest parameter collects the 'rest' of the elements not used from the destructured array.

// REMEMBER: SPREAD because of right side =
const arrT = [1, 2, ...[3, 4]];

//* REST because ... on LEFT side of =
// Just like before, 1st and 2nd elements become teh 1st and 2nd variables. ...others then collects the rest of the parameters unused in the destructuring assignment.
const [ax, bx, ...others] = [1, 2, 3, 4, 5];
console.log(ax, bx, others);

// Now, let's say we want Pizza and Risotto (the 1st and the 3rd items in the mainMenu array). We use the REST to capture the remaining items in the otherFood array, and SPREAD to add those two items into a new array.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //% NOTE; the rest parameter does not include skipped " ," items. Here, 'Pasta' is excluded.
console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad]

//! const [pizza2, ...otherFood2, risott] = [...restaurant.mainMenu, ...restaurant.starterMenu] ERROR - REST OPERATOR must be last element in destructuring assignment.

// Pull saturday out of the openingHours, and put the rest into a weekdays array.

//* Objects - Just like arrays.

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? FUNCTIONS
//? FUNCTIONS
//? FUNCTIONS

//* Rest Operator as argument - Allows function to take any number of arguments as an array
let add = function (...numbers) {
  '...numbers'; //# Unpacking the values
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(123, 5423, 412, -43, 12, 821);

// What about with an array?
const xa = [23, 5, 7];

// How would we log this array as a sum?
add(xa); //# - NOPE! In this line, we are calling the add function and passing the xa array as an argument.
//! Since the add function expects individual numbers, not an array, this will not produce the desired result. Instead, it will treat the xa array as a single argument and print 23,5,7 as the sum.
add(...xa); //# 35 - yep. Here, we're packing up the values.
console.log(...xa); // 23 5 7. We have to 1st 'spread' out the array into individual numbers, then we can add them up.

// make a pizza order (function above in restuarant object)
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//*SPREAD AND REST - RECAP and added CHALLENGES

// Spread and Rest look the same but work in opposite ways (depending on where they are used.)
// Spread is used where we would otherwise write VALUES be separated by a comma.
// Rest is used where we would otherwise write VARIABLE NAMES separated by a comma

// // 1 - Spread Operator Challenge: Write a function that takes in a array of numbers and returns the sum of all the numbers. You must use the spread operator in your solution.
// let arrChlg = [3, 2, 4, 10];
// const arrFun = function (arr) {
//   // let newArr = [...arr];
//   // let sum = 0;
//   // for (let i = 0; i < newArr.length; i++) {
//   //   sum = +newArr[i];
//   // }
//   // return sum;
//   //* or...
//   return [...arr].reduce((a, b) => a + b, 0);
// };
// console.log(arrFun(arrChlg));

// // 2 - Object Destructuring Challenge: Write a function that takes in an object and uses destructuring to extract the firstName, lastName, and age properties into variables. Return a string with that information.
// const joelObj = {
//   firstName: 'Joel',
//   lastName: 'Fuelling',
//   age: 33,
// };

// function objDes(obj) {
//   const { firstName, lastName, age } = obj;
//   return `${firstName} ${lastName} is ${age}`;
// }

// console.log(objDes(joelObj));

// // 3 - Array Destructuring Challenge: Write a function that takes in an array of arrays and uses destructuring to extract the first element of each subarray into variables. Return the sum of all those elements.
// let xy = [1];
// let zy = [2];
// let yy = [3];
// const array3 = [[xy, 12, 42], [zy, 0, 0, 0], [yy]];

// const arrInputLengths = function (arrays) {
//   const [x, y, z] = arrays; // extract the first element of each subarray into variables.
//   return x.length + y.length + z.length; // Return the sum of all those elements.
// };

// console.log(arrInputLengths(array3));

// // 4 - Spread and Destructuring Challenge: Write a function that takes in an object and an array. Use object destructuring to extract three properties from the object into variables. Use array destructuring to extract two elements from the array into variables. Return a string that concatenates all five of those variables.
// let birthYear = 1989;

// const objExample = {
//   first: 'Joel',
//   last: 'Fuelling',
//   age: `${2023 - birthYear}`,
//   reader: true,
//   smoker: false,
// };
// const arrTest = ["He's nice", 2, 3, 4, 'Good person!'];

// const objAndArray = function (obj, arr) {
//   const { first: a, last: b, age: c } = objExample;
//   const [aa, , , , bb] = arrTest;
//   return `${a} ${b} is ${c}. ${aa}, and a ${bb}`;
// };
// console.log(objAndArray(objExample, arrTest));

// // 5 - Nested Destructuring Challenge: Write a function that takes in an object with an array nested within it. Use nested destructuring to extract two elements from the array and one property from the object into variables. Return a string with that information.
// const obj5 = {
//   name: 'Joel',
//   skills: ['JS', 'HTML', 'CSS', 'Heroku', 'Git'],
//   age: 33,
// };

// const nestArrInObj = function (obj) {
//   const { skills, name } = obj;
//   const output = `${name} has skills in ${skills}`;
//   console.log(output);
//   return output;
// };
// nestArrInObj(obj5);

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Short Circuiting (&& and ||)
//? Short Circuiting (&& and ||)
//? Short Circuiting (&& and ||)

// Logical operators - Can use ANY data type, and return ANY data type.
//% SHORT CIRCUITING - with ||, returns the 1st paramater with a truthy value. Or, returns false.

console.log('------ OR ------');
console.log(3 || 'Joel'); // 3, because it's first and true. It's not always a boolean result.
console.log('' || 'Joel'); // '' is falsy
console.log(true || 0); // true is true
console.log(undefined || null); // undefined is falsy

//%  OR || works with multiple values. Will return the 1st true value of the arguments.
console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello is the 1st truthy value.

// restaurant.numGuests has not been declared yet.
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
guests1;

// Same thing with restaurant.numGuests declared.
restaurant.numGuests = 23;
const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
guests2;

console.log('------ AND ------');

//! WHAT IF WE WANT THE VALUE OF 0? - NEXT LECTURE

//% AND && works in the opposite way of || operator. It short circuits when the 1s value is falsy, and immediately returns that value without evaluating the second argument..

// When both/all values are true, it returns the last value.

console.log(0 && 'Joel');
console.log('true' && 'Joel');

//% Multiple operands.

console.log(23 && 'Hello' && null && 'Joel'); // null, because it is the 1st falsy value causing a short circuit. && returns the falsy value that caused the short circuit.

// Practical example - We don't know if orderPizza existst so we check if it does first
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Below is the same as the above if block. In the 2nd operand, we can call the function
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//* AND/OR RECAP
//* AND/OR RECAP
//* AND/OR RECAP

// OR || operator returns the 1s truthy value of all the operands, or the last value if all the operands are falsy.

// AND && returns the 1st falsy value, or the last one if all of them are truthy.

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? NULLISH COALESCING OPERATOR.
//? NULLISH COALESCING OPERATOR.
//? NULLISH COALESCING OPERATOR.

// Returns the 1st value only if it is null or undefined

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
guests1;

// Above, we actually want the 0 to be returned but it's read as falsy in the OR check
// Nullish Coalescing to the rescue - Introduced ES2020.
// Nullish: null and undefined.
//% Returns the 1st value if it is null or undefined.
// If 'restaurant.numGuests = 0;' was not declared above, then 'restaurant.numGuests' below would be falsy and 10 would be returned. Because it is, and set to 0, the 'restaurant.numGuests' value is returned
const guestCorrect = restaurant.numGuests ?? 10;
guestCorrect;

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? LOGICAL ASSIGNMENT OPERATORS
//? LOGICAL ASSIGNMENT OPERATORS
//? LOGICAL ASSIGNMENT OPERATORS

// Introduced in ES 2021.

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'Capri',
  owner: 'Gio Da Guy',
};

//% Let's set the default value of numGuests for any restaurant that does not the numGuests property.

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10; // If rest2.numGuests does not exit, make it 10.

//* LOGICAL || ASSIGNMENT OPERATOR
//* Assigns a value to a variable if it is currently falsy.

rest1.numGuests ||= 10; // Return rest1.numGuests(20) if it's true. Or, 10.
rest2.numGuests ||= 10;

console.log(rest1); // already contains the numGuests property.
console.log(rest2);

//! What about 0?

//* LOGICAL ?? ASSIGNMENT OPERATOR
//* returns the original value if it is null or undefined.

const rest3 = {
  name: 'Capri',
  numGuests: 0,
};

// rest3.numGuests ||= 10;
console.log(rest3.numGuests); //% We don't want 10, we want the actual 0. So, comment out the line above, create the logical nullish operator below and check the log, which is now 0 :)

//* Nullish assignment operator (null or undefined)
rest3.numGuests ??= 10;
console.log(rest3.numGuests); //

//* LOGICAL && ASSIGNMENT OPERATOR
//*

// Let's say we want to annonymize the names of the restaurant owners.

const rest4 = {
  name: 'Capri',
  numGuests: 0,
  owner: 'Ya Pappi',
};

// Regular &&
rest4.owner = rest4.owner && '<ANNONYMUOUS>';
console.log(rest4.owner);
console.log(rest3.owner); // No owner exists, undefined

//* Locial && Assignment
rest4.owner &&= '<ANNONYMOUS>';
rest3.owner &&= '<ANNONYMOUS>';
console.log(rest4); // truthy, so replaced with '<ANNONYMOUS>'
console.log(rest3); // Falsy, so nothing happened

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Looping Arrays: The for of loop
//? Looping Arrays: The for of loop
//? Looping Arrays: The for of loop

//* Let's expand the restaurant menus using the for of loop.

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let item of menu) console.log(item);
// Logs each element of the menu array.

// What if we want the current index?
// Not the best way to use a for of loop. //% Use .entries() to acheive this.

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//* let's look at this in deatil with the logs below.
console.log(menu.entries()); // Array iterator object
console.log([...menu.entries()]); // Array containing index 'location: index name' of each index.

//% Or better yet, destructure it.
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Enhanced Object Literals
//? Enhanced Object Literals
//? Enhanced Object Literals

// Our restaurant object above is an object literal, created using const obj = {}

//* Let's say we have an object outside an object...
//! We've moved openingHours into it's own object outside the restaurant object, but WE STILL WANT TO USE IT WITHIN THE RESAURANT OBJECT.

// Before ES6...
// 'openingHours: openingHours', would need placed inside the restaurant object as a key value pair referencing the openingHours object
// The new way, 'openingHours' - Simply references the variable name of the object outside the current object.

//* Let's say we have a function outside an object...
// Before ES6...
// 'order: function() {}' - The "old" way, before ES6.
// order: function (starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]},
// The new way, 'order() {}'
// order(starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]},

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Optional Chaining
//? Optional Chaining
//? Optional Chaining

//* If a certain property does not exist then undefined is returned immediately.
// Lets say we want to get the opening hours for Monday.
console.log(restaurant.openingHours.mon); // undefined.

// What if we don't know if the restaurant is open on Monday or not?
// console.log(restaurant.openingHours.mon.open); //! undefined.open - ERROR

// To avoid this, we check 1st if it actually exists.
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//* What if we want more than 1 property, like multiple days?
// Like this, but THIS IS GOING TO GET MESSY QUICK
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//* WITH OPTINAL CHAINING
// console.log(restaurant.openingHours.mon.open); //! undefined.open - ERROR
console.log(restaurant.openingHours?.mon?.open); //% Only if .openingHours exitsts, then .mon will be read. Only if .mon exists, then .open will be read. If not, then undefined will be returned... Literally the same as 'if (restaurant.openingHours && restaurant.openingHours.mon)' by placing it all before the ?.

// Example
// Loop over the array below and log whether or not the restauraunt is open or closed on each of the days.
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`; //! ?? Instead of ||, because saturdays opens at '0'
  console.log(
    `On ${day}, ${
      restaurant.openingHours[day]
        ? `we open at ${
            open === 0 ? `midnight` : `${open < 12 ? `${open}am` : `${open}pm`}`
          }` // Return time plus am or pm if open
        : `we are closed`
    }`
  );
  // console.log(`${restaurant.name} is open on ${day}`);
}

//? Methods with optional chaining

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // If it does not exist
console.log(restaurant.orderRisotto?.(2, 1) ?? 'Method does not exist'); // Method does not exist.

//? Methods with arrays

const users = [{ name: 'joel', email: 'hello@joel.com' }];
console.log(users[0]?.name ?? 'User Array empty');
console.log(users[4]?.name ?? 'User Array empty');

//! Without optional chaining
if (users.length >= 0) console.log(users[0].name);
else console.log('user array empty');

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Looping Objects: Object Keys/Names, Object Values, and Entries
//? Looping Objects: Object Keys/Names, Object Values, and Entries
//? Looping Objects: Object Keys/Names, Object Values, and Entries

//* Property KEYS/NAMES

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days:`;
for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

for (const day of Object.keys(openingHours)) {
  // An array containing 3 days.
  console.log(day);
}

//* Property VALUES

const values = Object.values(openingHours);
console.log(values); // Array with the openingHours objects of each day.

//* Property ENTRIES (Names + Values)

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (let [day, { open, close }] of entries) {
  // [day, value], where we know value is an object so we immediately destructure it into 'open' and 'close'

  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? SETS - SETS - SETS
//? SETS - SETS - SETS
//? SETS - SETS - SETS

//* Set - Collection Object {} of unique values
// Can never have any duplicates.
//* Looks similar to an array, but IS NOT. Sets are objects.
// No key:value pairs, just values grouped into a set.
// still iterable.
//% Order of elements in the Set is irrelevent.

// Strings are also iterables.
console.log(new Set('Joel'));

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Linguine',
  'Pizza',
  'Risotto',
]);
console.log(ordersSet); //! only contains 4 items, not 7. Any duplicate is removed.

//* If we want the size (NOT length) of the set, we use .size

console.log(ordersSet.size); // 4
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

//* Adding elements to a set.

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // Only get's added once.
console.log(ordersSet);

//* Deleting elements from a set.

ordersSet.delete('Risotto');
console.log(ordersSet);

//* Retreiving values from array.
// There is no way to get data out of a set.
// If all values are unique and the order does not matter, then why would you retreive/know how to get it?
//% If you need values in order and retreievable, use an array.

//* Deleteing all elements.

//# ordersSet.clear();

//* Looping is possible for a Set.

for (const order of ordersSet) console.log(order);

//! The - MAIN USE CASE FOR SETS -  is to remove duplicate values from arrays.
// Example: An Array of all the staff positions for a given day

const staff = [
  'Waiter',
  'Chef',
  'Manager',
  'Waiter',
  'Manager',
  'Chef',
  'Waiter',
];

// We want a unique array, with no duplicates.
const staffUnique = new Set(staff);
console.log(staffUnique);

//% If you need values in order and retreievable, create an array from the new set using spread (...)

const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2);
console.log(staffUnique2.size);
console.log(new Set(staffUnique2).size);

//% Or - const staffUnique3 = Array.from(staffUnique2);
//% console.log(staffUnique3);

//! How to RETURN the number (size) of values from a set as an array.
//! 1 - You can't return values from a set.
//! 1.1 - How to turn a set into an array?
//! 1.2 - How can we turn something into an array?
//! 1.3 - Using the [...] - OR - Array.from()

//* Or, just put the array in without creating a variable.
console.log(
  new Set(['Waiter', 'Chef', 'Manager', 'Waiter', 'Manager', 'Chef', 'Waiter'])
    .size
);


//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? S: Fundamentals
//? S: Fundamentals
//? S: Fundamentals

// Data structure we can use to  values to keys.
// Data is stores in key value pairs - //% BUT the keys can be any types in s!
//# In objects, the keys can obly be strings.
//* A lot more useful than sets!

//* 1 - Creating a new  (empty to start)
const rest = new ();

//* 2 - To add/set key/value pairs in the ...
// 1 - Pass in two arguments to the .set() function, the 1st being the name/type ('name'), the 2nd being the value ('Classico').
rest.set('name', 'Classico'); // Similar to .add() method from sets. //% STRING type

// What if we have a 2nd location? //%  NUMBER type.
rest.set(1, 'Firenze, Italy');
console.log(rest);
rest.set(2, 'Lisbon, Portugal');
console.log(rest);
console.log(rest.set(3, 'SanFran, California'));

//* 3 - The .set() method returns the updated , which allows us to chain the .set() method...

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']) //% ARRAY type
  .set('open', 11)
  .set('close', 23)
  .set(true, ' We are open!') //% BOOLEAN type
  .set(false, 'We are closed');
console.log(rest);

//* 4 - To retreive data from s we use the .get() method.

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('1')); // undefined

//* let's play around with some of the values!

const time = 21;
// Below, 'true' is returned from rest.get(), so 'We are open!' is returned. //! Clever, but not readable. This is meant to show the power of boolean in  keys.
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//* 5 - Checking if a  contains a certain key using .has()
//* 6 - Deleting a  value using .delete()
//* 7 - SIZE of a  using .size()
//* 8 - CLEARING the  using .clear()

console.log(rest.has('categories'));
// console.log(rest.has(2));
// rest.delete(2);
// console.log(rest.size);
// console.log(rest.has(2));

//* 9 - Setting  keys as arrays or objects.

rest.set([1, 2], 'Test');
console.log(rest);

//% 9.1 - How would we get back value from a key that's an array, with 2 indices?

console.log(rest.get([1, 2])); //! undefined. These two [1,2] arrays are not the same object in the heap.

// % 9.2 - If we wanted to access the array we have to declare it first so the same heap object is referenced.

//*  DOM values! yes, you can even put DOM values as keys in s. These are very versatile with advanced JavaScript.

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? S - Iteration
//? S - Iteration
//? S - Iteration

// Before we created an empty , and used .set() to set key/values, which can be cumbersome...

// This is a more detailed approach to creating and setting a  initially.

//* Use arrays within arrays.
const question = new ([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'You are correct!'],
  [false, 'That is not correct'],
]);
console.log(question);
// Similar to...
console.log(Object.entries(openingHours));

//* Convert object to . create a new  out of Object.entries()

const hours = new (Object.entries(openingHours));
console.log(hours);

//* For of loop with a .
//% QUIZ APP
for (const [key, value] of question) {
  // Destructure the question  into key:value pairs.
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer')); // We need a a number to compare to a key.

// console.log(
//   answer === question.get('correct')
//     ? `${question.get(true)}`
//     : `${question.get(false)}`
// );
// //! - OR, use what you just learned.

// console.log(question.get(question.get('correct') === answer)); //% (question.get('correct') === answer) = true, so 'You are correct!' is returned

//* Converting a  back into an array.

console.log([...question]); // The same as converting a set into an array, using spread.
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? Which Data structure to use?
//? Which Data structure to use?
//? Which Data structure to use?

// Where data can come from
//* 1 - From the program itself: Data written directly in source code (status messages)
//* 2 - From the UI: Data input from the user or data written in DOM (tasks in todo app)
//* 3 - From External Sources: Data fetched for exampel from web API (Application Programming Interface)

//* Array or Sets
// If we need a simple list.
//* Arrays:
// When you need to know/track the order
// When you need/have duplicates.
// When you need to manipulate the data.
//* Sets: Only when using unique values.
// When high performance is very important. (up to 10x faster compared to arrays!!)
// Used to remove duplicates from arrays.

const tasks = ['Code', 'Study', 'Practice']; // ['Code', 'Study', 'Practice']

const tasks1 = new Set(['Code', 'Code', 'Code', 'rest']); // {'Code', 'rest'}

//* Objects or s
// If we need key/value pairs, or, a way of describing the values.
// Objects are the traditional way (because no s before ES6).

//* Objects:
// Easier to write and access values with . and []
// Use when you need to include functions (methods)
// Use when working with JSON (You can convert easily to  once done)
const tasks2 = {
  task: 'Code',
  date: 'Today',
  repeat: true,
};

//* s:
// s offer way better performance, can have any data type, and are easy to iterate, and compute the size.
// It's very easy to write object using dot notation or the {}s
const tasks3 = new ([
  ['task', 'Code'],
  ['date', 'Today'],
  [false, 'Start coding!'],
]);

//* Data from APIs, or external sources, generally come in the form of JSON data.
//# For example.
// {
//   "employee": {
//       "name": {
//            "firstName": "sonoo",
//            "lastName": "wriggby"
//        }
//       "salary": 56000,
//       "married": true
//   }
// }

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? STRINGS --- PART 1
//? STRINGS --- PART 1
//? STRINGS --- PART 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

const planeIndexAt0 = plane[0];
const planeIndexAt5 = plane[5];
console.log(planeIndexAt0);
console.log(planeIndexAt5);
console.log('B737'[0]);

console.log(airline.length);
console.log('B434'.length);

//* Strings have very similar methods to arrays

//* .indexOf(), and .lastIndexOf()
// Both are case sensitive.

console.log(airline.indexOf('r'));
console.log(plane.indexOf(0)); // -1 is returned if it does not contain the requested index.

console.log(airline.lastIndexOf('r'));
//% Can search for entire strings, not just characters.
console.log(airline.lastIndexOf('Portugal'));
console.log(airline.lastIndexOf('portugal'));

//* Slice Method
// The passed index is where the start of the slice begins.
// A new 'Substring' is returned, which does not change the original string, which cannot change.
console.log(airline.slice(4));

//* To specify an end parameter, pass a 2nd parameter

console.log(airline.slice(4, 7)); // Output: Air // 'TAP ', 0-3, and ' Portugal', 7  -> end of array, are being removed. So, the 1st parameter is where to start and 2nd is where to end the slice.

// CHALLENGE
//% Let's try to extract just the 1st word without knowing any of the indexes.

function findFirstWord(word) {
  const spacedIndex = word.indexOf(' ');
  const returnWord = word.slice(0, spacedIndex); // Start with 0, slice up to spacedIndex
  console.log(returnWord);
  return returnWord;
}
findFirstWord('this is it');

//! - OR - Using .lastIndexOf with slice and 0 parameters will return up to whatever character you include, so a ''

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // + 1 removes the space

//* There's even more we can do with slice!

// Negative starting argument will reverse the staring index location
console.log(airline.slice(-2));
// Negative value to define "slice up to" parameter
console.log(airline.slice(1, -1)); // start at 1, slice up to the index -1 (last digit)

//CHALLENGE - Check Middle Seat.

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1); //% Putting the last index of the string into s.
  console.log(
    s === 'B' || s === 'E'
      ? `Seat ${seat} is a middle seat :(`
      : `Seat ${seat} is not a middle seat :D`
  );
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//* Whenever we call a method on a string, JavaScript behind-the-scenes convert that string primitive to a string OBJECT with the same content, then that object has the methods called on it.
console.log(typeof new String('Joel'));

//* It is THEN turned back into a string primitive
console.log(typeof new String('Joel').slice(1));

//* Boxing - Taking a string and putting into a 'boxed' object.
// This is what make a string iterable.
console.log(new String('Joel'));

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? STRINGS --- PART 2
//? STRINGS --- PART 2
//? STRINGS --- PART 2

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());
console.log('Malarky!'.toUpperCase());

// Fixing a passengers name so that the 1s letter is uppercase, and the rest is lowercase.

let passenger = 'joHNsoN';
const passengerLower = passenger[0].toUpperCase();
const correctedPassenger = passengerLower + passenger.slice(1).toLowerCase();
console.log(correctedPassenger);

function formatName(str) {
  str = str.replaceAll(' ', '');
  let firstLetter = str[0].toUpperCase();
  let restOfName = str.slice(1).toLowerCase();
  let formattedName = firstLetter + restOfName;
  return formattedName;
}
console.log(formatName(' catHERine '));

//* Comparing Emails

const email = 'Hello@Joel.io';
const loginEmail = ' hEl  lO!Jo el.Io \n';

function compareEmails(email1, email2) {
  //% .trim() to remove '\n' from input.
  function trimEmail(email) {
    email = email.toLowerCase().replaceAll(' ', '').trim();
    return email;
  }
  const email1check = trimEmail(email1);
  const email2check = trimEmail(email2);
  console.log(
    email1check === email2check
      ? `${email1check} matches ${email2check}`
      : `${email1check} doesn't match ${email2check}. Please try again`
  );
}

compareEmails('  ToM \n \n \n', ' t O m \n \n');
compareEmails('JoelfuellinG@gMail.com \n \n \n', 'JoelFuelling@gmail.co');

//* REPLACING parts of strings.
const priceORD = '$474.90';
const priceLON = priceORD.replace('$', '￡').replace('.', ',');
priceLON;

// Replacing all of an element
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

//% Without replaceAll, we have to use a Regex Expression / /
// Putting a g flag after the regex makes it global.
console.log(announcement.replace(/door/g, 'gate'));

//! RealWorld example of URL cleaning, using .replace(), Regex, and Ojbects as function inputs with default booleans for values.

const presentableUrl = (
  fullUrl,
  { removeProtocol = true, removeWww = true } = {}
) =>
  fullUrl
    .replace(/(https?:\/\/)/i, removeProtocol ? '' : '$1')
    .replace(/(www\.)/i, removeWww ? '' : '$1');

console.log(presentableUrl('https://www.openai.com/gpt-4'));

//* Three simple methods that return booleans

// includes, startswith, and endswith

const planex = 'A320neo';
const planey = 'A331beta';
console.log(plane.includes('A320'));
console.log(plane.startsWith('A' || 'B' || 'Z'));

function checkPlane(plane) {
  if ((plane.startsWith('A') && plane.endsWith('o')) || plane.endsWith('a')) {
    console.log(
      `The ${plane} is part of the ${
        plane.includes('n') ? 'neo' : 'beta'
      } plane family`
    );
  }
}
checkPlane(planex);
checkPlane(planey);

// CHALLENGE
// Allowing passengers (or not) based on their luggage.

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('I have some snacks and a gun for safety');

//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER
//! ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ ▻ - SECTION DIVIDER

//? STRINGS --- Part 3
//? STRINGS --- Part 3
//? STRINGS --- Part 3

//* Split - Allows us to split a string into multiple parts based on a divider string.

console.log('a+very+nice+string'.split('+'));

// '' as the divider string will split each character of the string into an array, including spaces
console.log('a very nice string'.split(''));
console.log('Another nice string, Joel!'.split(', ')); // Similar to + above

//* Destructuring a string after splitting
const [firstName, lastName] = 'joel fuelling'.split(' ');

//* Using .join()
// .join() creates a string from an array with a selected divider strin between each addition
// Let's make the last name uppercase, as well as adding a 'Mr.' in the beginning.
const newName = [
  'Mr.',
  firstName[0].toUpperCase() + firstName.slice(1),
  lastName[0].toUpperCase() + lastName.slice(1),
].join(' ');
console.log(newName);

// Below, we're putting 3 strings into an array, then using .join('') on the array to create 1 string with all items from the array, adding a space between them.
//% Using what we learned earlier, we also manipulate the string output using a function.

function capital(names) {
  const nameSplit = names.split(' ');
  const namesUpper = [];
  for (const n of nameSplit) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
  }
  console.log(namesUpper.join(' '));
}
capital('jOEL fUELLING');

//* Padding a string - Adding a certain number of characters to the Start or End of string until it has a desired length.

// The 1st parameter is the length the string will end up, the 2nd is the character to use.
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Joel'.padEnd(12, '+'));

console.log('Example String'.padStart(20, '~').padEnd(25, 'S'));

//! REAL WORLD EXAMPLE

// Masking credit card numbers.
const ccNumber = 4441555266637774;

function maskCreditCard(number) {
  const str = number + ''; // When one of the + sign operands is a string, the result will be converted to a string.
  const last = str.slice(-4); // Returning the last 4 characters
  return last.padStart(str.length, '*'); // Return 'last' with padding equal to the str.slice(-4) of * added at the start until it reaches str.length
}

console.log(maskCreditCard(ccNumber));

//* Repeat function - Allows us to repeate a string multiple times.

// Bad weather at an airport.
const message2 = 'Bad weather ~!!!~ All departures delayed ~!!!~ ';
console.log(message2.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(4);
planesInLine(2);
planesInLine(20);
*/
//? STRINGS METHODS PRACTICE
//? STRINGS METHODS PRACTICE
//? STRINGS METHODS PRACTICE

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const formatToAndFrom = str => str.replace(/\d?/g, '').toUpperCase();

function formatFlights() {
  let flightsList = flights.split('+');
  for (let f of flightsList) {
    flightsList = f.split(';');
    let [status, departedFrom, arrivingAt, time] = flightsList;
    status = status.replace(/_/g, ' ');
    const formattedFlights = `${
      status.startsWith(' Delayed') ? '🔴' : ''
    } ${status} from ${formatToAndFrom(departedFrom)} to ${formatToAndFrom(
      arrivingAt
    )} at (${time.replace(/\:/g, 'h')})`.padStart(50);
    console.log(formattedFlights);
  }
}
formatFlights(flights);
