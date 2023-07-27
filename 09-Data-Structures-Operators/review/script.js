//! DESTRUCTURING REVIEW.
//! DESTRUCTURING REVIEW.
//! DESTRUCTURING REVIEW.

const weekdaysX = ["mon", "tues", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //# No destructuring yet.
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    //% One argument! destructured names must match, order doesn't matter.
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} for ${address}, at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza(mainIngr, ...otherIngr) {
    console.log(mainIngr);
    console.log(otherIngr);
  },
};

restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
restaurant.orderPizza("mushrooms"); // REST is an empty array in this case.

restaurant.orderDelivery({
  time: "22:30",
  address: "Vai del Sole, 21",
  mainIndex: 2,
  starterIndex: 1,
});

// Call the above function againg to exercise the 'defaults' set in the destructuring, 'time' and 'mainIndex'.
restaurant.orderDelivery({
  address: "Vai del Sole, 21",
  starterIndex: 1,
});

//* Destructuring
const { name, openingHours, categories } = restaurant;

//* Changing variable names when destructuring.
//* Using a : to separate the variable name pulled from the object, and the newly declared name, 'name: restaurantName'

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//* Default values
//* Working with 3rd party data, APIs. Setting default values. Without default, we'll get undefined.
// In the real world, we usually get the data from somewhere else and we may not know what it looks like.

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//* Mutating variables while destructuring objects.

let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };

// a should become 23, and b should become 7.

// const {a, b} //! Already declared!
//! { a, c } = obj; //! Syntax error, JS expects a codeblack within {} and we can't assign things to codeblocks.

// To do that, we have to wrap the whole destructuring statement in parentheses

({ a, b } = obj);
console.log(a, b);

//* Nested Objects - Grabbing the 'open' and 'closed variables from 'fri' within the 'openingHour's variable. Rename them 'o' and 'c' with a default of 12.

const {
  fri: { open: o = 12, close: c = 12 },
} = openingHours;
console.log(o, c);

//* Functions with a lot of parameters... What about the order?
//! See 'orderDelivery method in restaurant.

//! SPREAD OPERATOR REVIEW.
//! SPREAD OPERATOR REVIEW.
//! SPREAD OPERATOR REVIEW.

// Spread = RIGHT side = //% SPRITE.
// Spread builds new arrays.
// Or, passes multiple values into a function.
// Expands  array into individual elements

//* Spread works on ALL iterables.
//* Iterables: arrays, strings, maps, sets, '
//! NOT objects.

// WRONG WAY
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// ... What about ...
console.log([1, 2, arr]); //% Puts an array inside an array, not what we want here

// Spread ... creates a shallow copy from the 'arr' array and writes them invidividually as a destructured array.

//* Spread takes the elements out of the array
console.log(...arr); // take each element

//* We use spread whenever we would otherwise write out multiple values separated by ','.

const newArr = [1, 2, ...arr];
const newArr2 = [1, 2].concat(arr); //! NOT THE SAME
console.log(newArr2);

// Lets add one item to the mainMenu. Create a copy, add the new element, save them to a variable 'newMenu'.

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//* Copy array - Shallow copy of 'restuarant.mainMenu'

const mainMenuCopy = [...restaurant.mainMenu];

//* Joinging 2 or more arrays. Spread each array out within a new array, you can do this as many times as needed!

const menuX = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuX);

//* String spreads ...

const str = "Joel";
const letters = [...str, " ", "S."];
console.log(letters);
console.log("J", "o", "e", "l");
//! console.log(`${...str} Fuelling`) - CANNOT USE SPREAD HERE.
/*
//* Real World example
const ingredients = [
  prompt("Let's make pasta! Main ingredient?"),
  prompt('Second ingredient?'),
  prompt('Third ingredient?'),
];

//% Same results!
// NOT scalable...
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// SUPER scalable :)
restaurant.orderPasta(...ingredients);
*/

//* Spread with Objects.

// Lets create a new restaurant object
const newRestaurantX = { ...restaurant };
console.log(newRestaurantX);

// Now, simply add a new K/V pair along with the restaurant spready copy.
const newRestaurantY = {
  ...restaurant,
  owner: "Joel Fuelling",
  foundedIn: 1989,
};
console.log(newRestaurantY);

//* Instead of Object.assign()

const restaurantCopyX = { ...restaurant };
restaurantCopyX.name = "Ristorante Roma";
console.log(restaurantCopyX.name);
console.log(restaurant.name);

//! REST PATTERN, AND REST PARAMETERS REVIEW
//! REST PATTERN, AND REST PARAMETERS REVIEW
//! REST PATTERN, AND REST PARAMETERS REVIEW

// Looks similar to spread, but does the opposite...

// Rest = LEFT side = //% REFT.

const arrX = [1, 2, 3, 4, ...[8, 9]];
console.log(arrX);

//* Rest grabs the 'rest' of the elements from an array and places them into their own array. Rest packs elements in, and spread unpacks them.

// aa is 1st variable, bb is the 2nd, ...others is the rest.
const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log(aa, bb, others);

// Grabbing the 1st and 3rd elements, then putting rest of the food into 'otherFood' //% EXCEPT the skipped 2nd item. REST must always be last in the destructuring assignment.
const [pizza, _, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//* Objects with REST.

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//! FUNCTIONS REVIEW
//! FUNCTIONS REVIEW
//! FUNCTIONS REVIEW

//* REST can be used to call 'rest parameters'

// No matter the size of '...numbers', we can calculate the sum.

const add = function (...numbers) {
  // Accepts an array, or list of single values. //# Also, doesn't it feel good to be able to pass in any number of parameters?
  let sum = 0;
  numbers.forEach(function (numbers) {
    sum += numbers;
  });
  return sum;
};
console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(5, 3, 7, 2, 12, 78, 151));

const x = [23, 5, 7];
console.log(add(...x)); //% Example of spread being the OPPOSITE of rest

//* Back to the restaurant!

//! See 'orderPizza' function above - Taking a 'mainIngredient', then placing the rest of the inputs into the 'otherIngredients' variable.
