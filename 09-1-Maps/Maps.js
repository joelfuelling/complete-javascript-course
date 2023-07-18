//? Objects compared to Maps.

// Map and an object ({}) are both used to store key-value pairs, but they have some differences in terms of functionality and behavior.

// KEY DIFFERENCES

//? OBJECT - Order doesn't matter, but keys are defaulted to STRINGS.

const obj1 = {
  11: "eleven",
  [4]: { firstName: "joel" },
};
console.log(obj1[4]);
console.log(obj1["11"]);
console.log(obj1[11]); // 'eleven' (implicit conversion), forced into a string.

//* There is no specific method to get the length of an object, so we call length after pulling out the number of keys from the object.
console.log(Object.keys(obj1).length); // 2 (manual counting)

//* Iteration: An object can be iterated using 'for...in' loop or Object.entries(), but the order of iteration is not guaranteed

for (const key in obj1) {
  console.log(key, obj1[key]); // Output order may vary
}

//? MAP - Order does matter, and you can delcare keys/values as whatever you want (see veryCool below)

//# Creating and adding to a map.

// 1 - Create a 'new Map()' and save it to a variable.

const map1 = new Map();
map1.set(veryCool, 2);
map1.set("a", 1);
map1;

function veryCool() {
  return "hello world";
}

// 1 - The below way is the beginning declaration of a Map. You can still use .set() to add things to a map created in this way.
//* By providing an array of key-value pairs to the Map constructor, you can INITIALIZE the map with multiple entries simultaneously.

const map2 = new Map([
  ["USD", "United Sates"],
  ["EUR", "Europe"],
  ["PESO", "Mexico"],
]);
console.log(map2.set(veryCool, 1));

//* SIZE (ie., .length for Maps)
// Map provides a size property to determine the number of key-value pairs it contains.

console.log(map1.size);
console.log(map2.size);

//* Iteration: A Map provides an iterator that follows the insertion order, allowing you to iterate consistently.

const map3 = new Map([
  ["test1", 1],
  ["test2", 2],
  ["test3", 3],
]);
console.log(map3);

for (const [key, value] of map3) {
  console.log(key, value); // output is IN ORDER
}

// Challenge 1: Write a function that takes an array of numbers and returns an object containing the count of each number in the array.
let numbers = [2, 54, -10, 2, 16, -10];

function arrReturnObj(arr) {
  const count = {};
  for (const num of arr) {
    count[num] = count[num] ? count[num] + 1 : 1; // If the current num of arr is already assigned to the count object add 1 to it, otherwise set it to 1.
    // We'll use the number itself as the key in the object, and the count as its corresponding value.
  }
  return count;
}
console.log(arrReturnObj(numbers));

// Challenge 2: Write a function that takes a string and returns a Map containing the frequency of each character in the string.

function strReturnObj(str) {
  const strMap = new Map();
  for (const char of str) {
    strMap.set(char, strMap.get(char) + 1 || 1); // Check if the character is in the string. If it is add 1, otherwise set it to 1.
  }
  return strMap;
}
console.log(strReturnObj("coffee"));
