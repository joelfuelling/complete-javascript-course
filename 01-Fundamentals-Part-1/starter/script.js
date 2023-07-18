// /*
// let js = 'amazing';
// if (js === 'amazing') 
// // alert("jS is fun!")

// console.log(40+8+23-10);

// let firstName = "matilda"

// console.log(firstName)
// console.log(firstName)
// console.log(firstName)

// let jonas_matilda = 'JM'
// let $function = 27


// let PI = 3.1415

// // NAMING IS IMPORTANT
// // Which is better?
// let myFirstJob = 'Programmer'
// let myCurrentJon = 'Teacher'

// // or ...
// let job1 = 'programmer'
// let job2 = 'teacher'

// console.log(myFirstJob)


// //Below, it still logs 'true' becuase it comes before assinging it to javaIsFun
// console.log(true)
// let javaIsFun = true

// console.log(typeof true)
// console.log(javaIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')

// javaIsFun = 'Shore!' // Here, we're changin the definition of javaIsFun, already created above.
// console.log(typeof javaIsFun)

// let year
// console.log(year)
// console.log(typeof year)

// year = 1989
// console.log(typeof year)

// console.log(typeof null)
// */

// // const ageJonas = 2037 -1991
// // const ageSarah =2037 -2018
// // console.log(ageJonas, ageSarah)

// // Lets say...

// // const now = 2037
// // const ageJonas = now - 1991
// // const ageSarah = now - 2018
// // console.log(ageJonas * 2, ageJonas / 10, 2**3)
// // Jonas dividied by 3, then 2 to the power of 3 (or 2*2*2)


// // const firstName = 'Jonas'
// // const lasteName = 'Schmedt'
// // console.log(firstName + ' ' + lasteName)
// // The OG way above! Concat!

// // const lotsOfDecimal = 1.766584958675746364;
// // lotsOfDecimal;
// // // toFixed will reduce the # of decimals to whatever the number passed as an arg is.
// // const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// // console.log(twoDecimalPlaces);

// // // Mathematical operators
// // let x = 10 + 5
// // x += 10
// // x *= 4
// // x++
// // x--
// // x--
// // console.log(x)

// // Comparison Opeators

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018

// console.log( ageJonas > ageSarah)
// const isFullAge = ageSarah >= 18

// console.log(now - 1991 > now - 2018)

// // left to right almost always, except thigns like exponents and some others.

// let x, y
// x = y = 25 - 10 - 5
// console.log(x,y)

// // This will not "execute" properly when trying to get the actual average.

// let averageAge = ageJonas + ageSarah / 2
// console.log (averageAge)
// //It should be...
// averageAge = (ageJonas + ageSarah) / 2
// console.log(averageAge)


//? STRINGS STUFF
//? STRINGS STUFF
//? STRINGS STUFF


// const firstName = 'Joel'
// const job = 'Software Engineer'
// const birthYear = 1989
// const year = 2023

// const Joel = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job
// console.log(Joel)
// // Done, nice!

// const Joel2 = `I'm ${firstName}, a ${year - birthYear} year old ${job}`
// console.log(Joel2)

// const age = 19
// const isOldEnough = age >= 18
// if (age > isOldEnough) {
//     console.log(true)
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young to drive. Wait another ${yearsLeft} years`)
// }

// const birthYear = 1989

// let century;
// if (birthYear <= 2000) {
//     century = 20
// }else {
//     century =21
// }
// console.log(century)




//? Conversion and Coercion
//? Conversion and Coercion
//? Conversion and Coercion



// // * Conversion
// // Number() and String() are perfect examples.

// const inputYear = '1989'
// console.log(inputYear + 18)
// // Need to change the string type to a number with the Number() function.

// Number(inputYear)
// console.log(Number(inputYear), inputYear) 
// // Output: 1989, '1989'
// console.log(inputYear + 18)
// // Outpug: 198918
// //! NOTE: Number() doesn't rewrite the varibale. It only converts it within the current command. (see output of the 2 logs above, the 2nd is 198918)
// console.log(Number(inputYear) + 18)
// // Output 2007
// // Now its a number plus a number!

// console.log(Number('Jonas'))
// //! NaN, obviously



// // * Coercion
// console.log('I am ' + 33 + ' years old') // Howd does this work the the #? 

// //* The +, *, and / all trigger a coersion of the number so the output is one string.

// console.log('23' * 10 * '2') // Output: 460
// console.log('23' / '2.3' / 1) // Output: 10


// console.log('23' - '10' - 3) // What would this be? It is 10!
// //* The - operator does the opposite of + (duh, jk, lol) where strings are converted to numbers.
// console.log('23' + '10' + '3') 
// // Output: 23103

// //CHALLENGE:
// let n = '10' + 1
// n = n - 1
// console.log(n) 
// // Output: 100 - A bit odd, but those are the rules.

// // * Lets put them together.
// console.log(('10' + 4 + '96' - 496 + '1000') / '5')
// // 10496 - 496 = 10000
// // 10000 + '1000' = 100001000
// // 100001000 / 5 = 20000200





//? Falsy and Truthy Values
//? Falsy and Truthy Values
//? Falsy and Truthy Values

// There are 5 types of Falsy values:
// They are not false initially, but will be when converted to a Boolean.
// 0
// ''
// undefined
// null
// NaN

// The below are all cooercion.
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Joel'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// // Check it out below. JS will try to convert the value of the if to true or else. 0 = false, so else is executed.
// const money = 0
// if (money) {
//     console.log("Don't spend it all")
// } else {
//     console.log("You should get a job")
// }

// let height;
// if (height) {
//     console.log("height is defined")
// } else {
//     console.log("height is undefined")
// }

// let height3 = 5.6
// if (height3) {
//     console.log("height is defined")
// } else {
//     console.log("height is undefined")
// }

//! Here's a weird BUG! 
//! height is undefined below, even though it's set to 0 which is a valid number. 0 being falsy though, triggers the else. We only acconted for height being defined, or not, we DID NOT account for it equaling to 0.
// let height2 = 0
// if (height2) {
//     console.log("height is defined")
// } else {
//     console.log("height is undefined")
// }


// Equlaity Operators: == vs. ===
// const age = 18
// if (age === 18) console.log('You old! (strict)')
// if (age == 18) console.log('You old! (loose)')
// console.log('18' === 18) // False
// console.log('18' == 18) // True
// Loose ==, vs. strict ===.
// //! DO NOT USE ==

// const favorite = prompt("What's your favorite number?");

// if (favorite === 23) console.log("cool! Great number")
// if (favorite == 23) console.log ("Wrong Operator (==) used")

// // Converting the returned string prompt into a number! Putting it all together.
// const favorite1 = Number(prompt("What's your favorite number?"))

// if (favorite1 === 23){
//     console.log("23 is an amazing number")
// } else if (favorite === 7){
//     console.log("7 is good")
// } else {
//     console.log(`${favorite1} is not 23 or 7`)
// }

// What about 'different'? ! ! ! ! !

// if (favorite !== 23) console.log("Why not 23?")





//? BOOLEAN LOGIC
//? BOOLEAN LOGIC
//? BOOLEAN LOGIC

// A and B.
// Both have to be true for the statement to be true.

// A or B.
// As long as one of them is true the whole statement is true.

// Not A, not B.
// Inverts the value so true is false, and false is true.

// const hasDriversLicense = true // A
// const hasGoodVision = true // B

// console.log(hasDriversLicense && hasGoodVision) // false
// console.log(hasDriversLicense || hasGoodVision) // True
// console.log(!hasDriversLicense) // ! false

// const shouldDrive = hasDriversLicense && hasGoodVision

// // if (shouldDrive) {
// //     console.log("You can drive")
// // } else {
// //     console.log("Someone else should drive...")
// // }

// const isTired = false
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense & hasGoodVision && !isTired) {
//     console.log("Good to drive!")
// } else {
//     console.log("Don't drive -_-")
// }




//? SWITCH
//? SWITCH
//? SWITCH
// An alternate way to write a complicated if/else statement.
//* two 'case' next to each other mean a result can apply to multiple inputs ('wednesday', 'thursday')
//* break is used to exit the loop after a return value (console.log in this case) is performed.
// const day = 'wednesday'

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log("Plan Course structure")
//         console.log('Go to coding meetup')
//         break
//     case 'tuesday':
//         console.log("Prepare theory videso")
//         break
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code examples")
//         break
//     case 'friday':
//         console.log('Record videos')
//         break
//     case 'staurday':
//     case 'sunday':
//         console.log ('Enjoy the weekend')
//         break
//     default:
//         console.log('Not a valid day')
// }

// if (day === 'monday') {
//     console.log('plan course')
//     console.log('go to meetup')
// } else if (day === 'tuesday') {
//     console.log('prepare videos')
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('write code examples')
// } else if (day === 'friday') {
//     console.log('record videos')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('enjoy the weekend')
// } else {
//     console.log('not a valid day')
// }




//? The Ternary operator

let age = 23
age >= 18 ? 
console.log('I like to drink beer')
:
console.log ("I like to drink water)")



age = 17
const drink = age >= 18 ? 'Wine' : 'Water'
console.log(drink)

// *using ternary, we transformed the block of code below (7 lines) into the 2 lines above!
// Remember, if you're using an if/else, you need to define the variable outside of it. 

let drink2
if(age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink)  

//! With a ternary, we can have expressions inside a template literal.
//! With a ternary, we can have expressions inside a template literal.
//! With a ternary, we can have expressions inside a template literal.


console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`)

//! END OF SECTION 01
//! END OF SECTION 01
//! END OF SECTION 01
//! END OF SECTION 01
//! END OF SECTION 01
//! END OF SECTION 01
//! END OF SECTION 01
//! END OF SECTION 01
//! END OF SECTION 01

