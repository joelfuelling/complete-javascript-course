//? String Constructors
//? String Constructors
//? String Constructors
//? MDN notes ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String)

// Anything can be converted to a string.

//% When just 'String' is called as function, it coerces the parameter to a string primitive
// You would rarely use 'String' as a constructor.
const a = String('Hello World!');
console.log(a);

//% When 'new String' is called as a constructor, it creates a String object, which is NOT PRIMITIVE.
const b = new String(a); // Whether we pass in a (the string primitive created above), or 'Hello World!', it doesn't matter because they are the same thing.
console.log(b);

console.log(a instanceof String);
console.log(b instanceof String);
console.log(typeof a);
console.log(typeof b);

//* using String() to stringify a symbol

//! Below will all reply with 'Cannot convet a Symbol value to a string'
const sym = Symbol('example');
// `${sym}`
// '' + sym
// ''.concat(sym)

const sym1 = Symbol('Example1');
console.log(String(sym1));
