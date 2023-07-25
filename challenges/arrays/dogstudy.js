/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages  ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶")
4. Run the function for both test datasets
Test data:
§ Data 1: cJulia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/

const julia = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];
const kate = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
  // 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat  ages from that copied array (because it's a bad practice to mutate function parameters)
  let newJuliaDogs = dogsJulia.slice();
  newJuliaDogs.splice(0, 1);
  newJuliaDogs.splice(-2); //% Without 2nd parameter, will splice to the end.
  console.log(newJuliaDogs);
  //   2. Create an array with both Julia's (corrected) and Kate's data
  let dogs = newJuliaDogs.concat(dogsKate);
  //  3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
  dogs.forEach(function (value, i) {
    console.log(
      ` Dog number ${i + 1} is ${
        value >= 3
          ? `an adult, and is ${value} years old`
          : `${value}, and is still a puppy!`
      } `
    );
  });
}
checkDogs(julia2, kate2);

/*
 Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study. 
Your tasks: 
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order: 
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4 
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old) 
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages 😉) 
4. Run the function for both test datasets 
Test data: 
§ Data 1: [5, 2, 4, 1, 15, 8, 3] 
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 
 */

const d1 = [5, 2, 4, 1, 15, 8, 3];
const d2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogs) {
  return dogs
    .map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter((dog) => dog >= 18)
    .reduce((acc, dogAge, i, arr) => (acc += dogAge) / arr.length, 0);
};
const funcValue1 = calcAverageHumanAge(d1);
const funcValue2 = calcAverageHumanAge(d2);
funcValue1;
funcValue2;
