// use strict mode makes it easier to avoid accidental errors
    // creates more visual errors in the consolse that JS would otherwise ignore.

'use strict'
// let hasDriversLicense = false
// const passTest = true

// Below, were purposefully leaving the s of Drivers. in strict mode, we get an error about the variable not being defined. Without strict mode, there is no error thrown.
// if (passTest) hasDriverLicense = true
// if (hasDriversLicense) console.log('I can drive :D')

// Will throw an error for using reserved words (interface, private, huuuuuge list)
// const interface = 'Audio'
// const private = 534
// const if = 23

/*
function logger(){
    console.log('my name is joel')
}

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5,0)
console.log(appleJuice)
const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice)


//? Declarations vs Expressions.
//? Declarations vs Expressions.
//? Declarations vs Expressions.


//! Declaration
function calcAge1(birthYear) {
    const age = 2023 - birthYear
    return age
}
const age1 = calcAge1(1989)

//refactoring:
function calcAge1(birthYear) {
    return 2023 - birthYear
}

//! Expression
//! Saving the function, its workings, and the returned valuable as 1 variable
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}

const age2 = calcAge2(1989)
console.log(age1, age2)






//? Arrow function
//? Arrow function
//? Arrow function

// the return happens implicityly and is great for 1 line functions.
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1989)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1989, "Joel"))
console.log(yearsUntilRetirement(1980, "Rick"))

//! Arrows do not get a 'this' keyword - MORE STUFF FOR LATER





//? Function calling other functions
//? Function calling other functions
//? Function calling other functions

// Lets cut some fruit!

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }


// // calling cutFruitPieces twice below!.
// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`
//     return juice
// }

// console.log(fruitProcessor(2,3))


const calcAge = function(birthYear) {
    return 2023 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    calcAge(birthYear)
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    }
    console.log(`${firstName} has already retired`)
    return -1
    // return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1989, "Joel"))
console.log(yearsUntilRetirement(1950, "Rick"))





//? ARRAYS
//? ARRAYS
//? ARRAYS

const friend1 = 'Mike'
const friend2 = 'John'
const friend3 = 'Kyle'

const friends = ['Mike', 'John', 'Kyle']

const arrayOfyYears = Array(1991, 1984, 2008, 2020) //! Undefined!
const arrayOfyYears = new Array(1991, 1984, 2008, 2020) //* new is required!

console.log(friends[0]) // 'Mike'
console.log(arrayOfyYears[3]) // 2020
console.log(arrayOfyYears[5]) // Undefined.

console.log(friends[friends.length -1]) // Last item in array, 'Kyle'

//changing values. Define the index, set = , set the new value.
// Even though the Array is const, it can be changed. An array i always mutable.
//! Sets are a special array that cannot be changed.

friends[2] = 'Ray'
console.log(friends[2])


// WE CANNOT redfine the array like below:
// friends = ['Bob', 'Alice']
// console.log(friends) // TypeError: Assignment to constant variable.


//* We CAN put expressions in arrays though
const Joel = ['Joel', 'Fuelloing', 'Chicago', 2023-1989]
console.log(Joel)

const firstName = "Joel"
const Joel2 = [firstName, 'Fuelling', 'Chicago', `${2023 - 1989} years old`]
// Add your friends, another array!
Joel2.push(friends)
console.log(Joel2)


// Let's play around more with Arrays - EXERCISE

const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}

const years = [1990, 1967, 2002, 2010]
years + 10 // Dev tools output: "1990, 1967, 2002, 201010"
console.log(years)
years - 10 // Dev tools output: NaN
console.log(years)
// calcAge2(years) //! Cannot access 'years' before initialization
console.log(calcAge2(years)) //! NaN - look above, why is this NaN?

const age1 = calcAge2(years[0])
const age2 = calcAge2(years[1])
const age3 = calcAge2(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length -1])]
console.log(ages)

const fun = Array['fun', 'very fun'] // Undefined!
const fun2 = new Array['fun', 'very fun']
console.log(fun)


const friends = ['Mike', 'John', 'Kyle']
const newLength = friends.push('Kate')
// Push adds to the end.
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)
// unshift adds to the front

friends.shift()
console.log(friends)
// shift removes from the front. //! John got added, then removed.
friends.pop()
const popped = friends.pop()
console.log(popped)
// Pop removes the last index. You can store it in a 'popped' variable or any of you're choosing.
console.log(friends)


console.log(friends.indexOf('Mike')) // Returns the index locaiton of a specified input.
console.log(friends.indexOf('Kyle')) // !Kyle was removed so -1 is returned. 


// .includes()
// Strict equality ===

friends.push(23)
console.log(friends.includes(23)) // true.
console.log(friends.includes('23')) //! false
console.log(friends.includes('Kyle')) // false
console.log(friends.includes('Mike')) // true

if (friends.includes('Peter')) {
    console.log('Peter is a friend')
} console.log('Peter is not a friend')





//? OBJECTS
//? OBJECTS
//? OBJECTS

// Array for context caompared to objects.
const JoelArray = ['Joel', 'Fuelling', 2023-1989, 'job seeker', ['Mike', 'Nate', 'Kimmi']]


//* Object literal syntax
// * order doesn't matter, whereas in Arrays it entirely matters.

// Objects are generally used for more unstructured data.
const Joel = {
    firstName: 'Joel',
    lastName: 'Fuelling',
    age: 2023-1989,
    title: 'Job Seeker',
    friends: ['Mike', 'Nate', 'Kimmi']
}

// Descturucting an object - //! REACT REACT REACT
const destructured = {Joel}
console.log(Joel)
console.log(destructured)

// Getting properties with dot notation.

console.log(Joel.lastName)
// Or, where we can get lastName from an expression.
console.log(Joel['lastName'])

// Below, we're putting 'Name' in the nameKey variable to call in each console.
const nameKey = 'Name'
console.log(Joel['first' + nameKey])
console.log(Joel['last' + nameKey])


// do it on your ownd!
const zeldaToys = {
    favorite: 'carpet',
    secondFavorite: 'the wand',
    thirdFavorite: 'the rest :(',
}

const favoriteKey = 'Favorite'
console.log(`Zelda's second favorite toy is ${zeldaToys['second' + favoriteKey]}`)

// const interestedIn = prompt('What do you want to know about Zelda? Choose between favorite, secondFavorite, and thirdFavorite')
// console.log(interestedIn)
// console.log(Joel.interestedIn) // Undefined!
// console.log(Joel[interestedIn]) // There we go!

// if (Joel[interestedIn]) {
//     console.log(Joel[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, title, friends')
// }

// Lets add objects to the object now.

Joel.location = 'Chicago'
// Ez.
Joel['location'] = 'Chicago'
console.log(Joel)
// OUTPUT:
// {
//     firstName: 'Joel',
//     lastName: 'Fuelling',
//     age: 34,
//     title: 'Job Seeker',
//     friends: [ 'Mike', 'Nate', 'Kimmi' ],
// !   location: 'Chicago'
//   }

// Challenge
// Write "Joel has 3 friends and his bestfriend is called Mike"

console.log(`${Joel.firstName} has ${Joel.friends.length} friends, and his best friends is called ${Joel.friends[0]}`)



const Joel = {
    firstName: 'Joel',
    lastName: 'Fuelling',
    birthYear: 1989,
    title: 'Job Seeker',
    friends: ['Mike', 'Nate', 'Kimmi'],
    hasDriversLicense: true,
    //! the function name calcAge is the key: the function is the expression creating the value. The difference from a normal function definition is just in the syntax because it's part of an object.
    //* This function expression is a method
    //! Any function that is attached to an object is called a method.
    calcAge: function(birthYear){
        return 2023 - birthYear
    }
}

// This .log is not ideal, we're using 1989 again, not DRY.
//? console.log(Joel.calcAge(1989))
//* With every method, we get access to the .this() function. Instead of passing the birthyear AGAIN into calcAge, we can apply this.birthYear and return it since 'this' represents the entire object.
// If Joel2 should change names later in the future, .this() takes care of that and still works!
const Joel2 = {
    firstName: 'Joel',
    lastName: 'Fuelling',
    birthYear: 1989, //! this.birthyear
    title: 'Job Seeker',
    friends: ['Mike', 'Nate', 'Kimmi'],
    hasDriversLicense: true,
    calcAge: function(){
        // console.log(this) //! 'this' is the entire Joel2 object.
        return 2023 - this.birthYear
    }
}
// The year is no longer passed through below. 
// console.log(Joel2.calcAge())



//* What if we need to access the age at multiple code lines?
const Joel3 = {
    firstName: 'Joel',
    lastName: 'Fuelling',
    birthYear: 1989,
    title: 'Job Seeker',
    friends: ['Mike', 'Nate', 'Kimmi'],
    hasDriversLicense: true,
    calcAge: function(){ //! Just create a new age property with 'this' and call it when you need to.
        this.age = 2023 - this.birthYear
        return this.age
    },
    
    getSummary: function() {
        let summary = console.log(`${this.firstName} is a ${this.age}-year old ${this.title}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`)
        return summary
    }
}
console.log(Joel3.calcAge())
//! The console below WILL NOT WORK without 1st (above) calling the function outside of the object. Take away the log above and you get 'undefined' for the log below
console.log(Joel3.age)

// Challenge - Write a method called 'Get summary' that returns a string with the data about Joel3.
// "Joel is a 34 year old Job Seeker and he has a drivers license.
Joel3.getSummary()


// ! ! ! ! ! ! ! ! ! ! ! !

// Building a bridge between the array method prior, and the object method above.





//? ITERATION: THE FOR LOOP
//? ITERATION: THE FOR LOOP
//? ITERATION: THE FOR LOOP

// Keeps running while condition is true.
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting reps, on rep number ${rep}`)
}

const types = []

// We want to console log each thing.
let JoelArray = ['Joel', 'Fuelling', 2023-1989, 'job seeker', ['Mike', 'Nate', 'Kimmi'], true]
for(let i = 0; i < JoelArray.length ; i++){
    // Reading from Joel Array
    console.log(JoelArray[i], typeof JoelArray[i], i)
    // Filling types array
    // types[i] = typeof JoelArray[i]
    types.push(typeof JoelArray[i])
}
console.log(types)

const years = [1999, 2007, 1969, 2020]
const ages = []

for(let i = 0; i < years.length; i ++){
    ages.push(2023 - years[i])
    console.log(ages)
}
console.log(ages)



// Two important statemnts about loops!
//? CONTINUE AND BREAK
//? CONTINUE AND BREAK
JoelArray = ['Joel', 'Fuelling', 2023-1989, 'job seeker', ['Mike', 'Nate', 'Kimmi'], true]

console.log('---ONLY STRINGS---')
for(let i = 0; i < JoelArray.length ; i++){
    if(typeof JoelArray[i] !== 'string') {
        console.log(JoelArray[i], typeof JoelArray[i])
        continue
    } else if(typeof JoelArray[i] === 'array'){
    console.log(JoelArray[i], typeof JoelArray[i])
    }   
}

console.log('---BREAK WITH NUMBER---')
for(let i = 0; i < JoelArray.length ; i++){
    if(typeof JoelArray[i] === 'number') break
    
    console.log(JoelArray[i], typeof JoelArray[i])
}


const joel = ['Joel',
 'Fuelling',
  2023-1989,
   'job seeker',
    ['Mike', 'Nate', 'Kimmi'],
     true
    ]
//* Looping forwards
// 0, 1, ..., 4   i ++

//* Looping backwards
// 4, 3, ..., 0   i --

for(let i = joel.length-1; i >= 0; i --) {
    console.log(i, joel[i])
}



//? LOOPS IN LOOPS
//? LOOPS IN LOOPS


for(let exercise = 1; exercise < 4; exercise++){
    console.log(`---------starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise: ${exercise}, Rep: ${rep}`)
    }
}


//? WHILE LOOPS
//? WHILE LOOPS

for (let rep = 1; rep < 6; rep++){
    console.log(` Rep: ${rep}`)
}
*/

//* The variable needs declared outside the loop!
let rep = 1
while (rep <= 10) {
    console.log(`WHILE: Rep number ${rep}`)
    rep++
}

//! When we don't know how many iterations we need, a while loop is THE BEST OPTION
// The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
let dice = Math.trunc(Math.random() * 6) +1
let dice2 = Math.trunc(Math.random() * 8) +1
let dice3 = Math.trunc(Math.random() * 10) +1

while (dice !== 6){
    console.log(`D6 roll:  ${dice}`)
    dice = Math.trunc(Math.random() * 6) +1
    if(dice === 6){
        console.log('6 was rolled!')
    }
}
while (dice2 !== 8){
    console.log(`D8 roll:  ${dice2}`)
    dice2 = Math.trunc(Math.random() * 8) +1
    if(dice2 === 8){
        console.log('8 was rolled!')
    }
}
while (dice3 !== 10){
    console.log(`D10 roll: ${dice3}`)
    dice3 = Math.trunc(Math.random() * 10) +1
    if(dice3 === 10){
        console.log('10 was rolled!')
    }
}
//... You get the idea!

