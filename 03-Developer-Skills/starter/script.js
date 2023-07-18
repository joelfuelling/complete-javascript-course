// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//! EXAMPLE:
//! Project Manager: "We need a function that reverses whatever we pass into it"

    // 1 - What does "whatever" even mean in thi context? What should be reversed? 
    // Answer: Only Strings, numbers, and arrays make sense to revers.

    //* TASK LIST: 1.1 - Check if argument is number, string, or an array

    // 2 - What to do if something else is passed in?

    // 3 - What should be returned?
        // Should it always be a string, or should the type be th same as passed in type.

    // 4 - How to recognize whether the argument is a number, a string, or array?
    
    // 5 - How to reverse a number, a string, or an array?





//* Steps to solve any problem.

//? 1 - Make sure you 100% understand the problem.
    //? Ask the right questions.

//? 2 - Divide and Congquer: Break a big problem into smaller sub-problems.
    //?? Each problem is just smaller proglems that build with each other.


//! PRACTICE PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given array of temperatures of one day, calculate the temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"


// * 1 - Understanding the problem.
    // How do we handle an error?
    // What does it look like, and what do we do with it?

    // What do we mean by "calulcate the temperatures of one day?"
    // How do we calculate amplitude?
        // Difference between the highest and lowest temperatures in the array.
        // How to compute max and min temperatures?

    
// * 2 - Breaking up into sub-problems.
    // How to ignore errors?
    // find max value in temp array
    // find min value in temp array
    // subract min from max, return it for amplitude.
/* 
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const temperatures2 = [4, 7, 8, -3, -4, 0, 'error', 12, 20, 2, -5]
let allTemps

const calcTempAmplitude = function (temps, temps2) {
    let t1 = [...temps]
    let t2 = [...temps2]
    const allTemps = t1.concat(t2) 
let max = [...allTemps]
max = allTemps[0]
let min = [...allTemps]
min = allTemps[0]
let errors = []
let error
for(let i = 0; i < allTemps.length; i ++){
    if(allTemps[i] > max) max = allTemps[i] 
    if(allTemps[i] < min) min = allTemps[i]
    if(typeof allTemps[i] !== 'number') { 
        errors.push(error)
    }
}

let amplitude = max - min
console.log(`The max temperature is ${max}, the minimum is ${min}, the amplitude is ${amplitude}, and there were ${errors.length} errors`)
}


//! Problem 2: Function should now receive 2 arrays of temps

// 1) - Understanding the problem
// with 2 arrays, should we implement functionatlity twice?
//! NO

// 2) - Breaking up into sub-problems
// Merge 2 arrays.
    //? const allTemps = temps.concat(temps2)

calcTempAmplitude(temperatures, temperatures2)
*/




// ? DEBUGGING
// ? DEBUGGING
// ? DEBUGGING

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        //* C) FIX
        // value: prompt('Degrees celsius:')
        value: 10,
    }

    //* B) FIND
    console.log(measurement)
    //! console.warn(measurement.value)
    //! console.error(measurement.value)
    //! console.table(measurement)

    const kelvin = measurement.value + 273
    return kelvin
}
// * A) IDENTIFY
console.log(measureKelvin())
// Output: if 100 is put in > 100273, not what we want! There's a 'bug' somewhere. It's adding strings, we want numbers.
//! Let's check it out! (3 console logs above)


const calcTempAmplitudeBug = function (temps, temps2) {
    let t1 = [...temps]
    let t2 = [...temps2]
    const allTemps = t1.concat(t2) 
let max = [...allTemps]
max = allTemps[0]
let min = [...allTemps]
min = allTemps[0]
for(let i = 0; i < allTemps.length; i ++){
    if(typeof allTemps[i] !== 'number') continue
    //! debugger - This will start a debug on Google Chrome!
    if(allTemps[i] > max) max = allTemps[i] 
    if(allTemps[i] < min) min = allTemps[i]
    }
    console.log(max, min)
    return max - min
}
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1],[10, -3, 0])
// * A) IDENTIFY
console.log(amplitudeBug)




//! CHALLENGE
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
// Example: [17,21,23] will print "... 17 C in 1 days ... 21 C in 2 days ... 23 C in 3 days ..."
// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Break it down.
// How do we we log the # of days away + 1 for each temperature?
// How do we transform an array to string?

//* my answer
function tempForecast(arr){
    let days = []
    let totalDays
    for(let i = 0; i < arr.length; i ++) {
        let day = (`${arr[i]}°C in ${i + 1} days ...`)
        days.push(day)
        totalDays = '... ' + days.toString()
    }
    console.log(totalDays.replaceAll(',',' '))   
}
let arr = [12, 5, -5, 0, 4]
tempForecast(arr)

//* Jonas version 
const printForecast2 = function (arr) {
    let str = ''
    for (let i = 0; i < arr.length; i ++){
        str += `${arr[i]}°C in ${i + 1} days ... `
    }
    console.log('... ' + str)
}
printForecast2(arr)
