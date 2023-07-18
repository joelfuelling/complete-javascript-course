"use strict";
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document
  .querySelector("button")
  .addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    const rows = text.split("\n"); // Create an array from each row in the textarea by splitting at the line break.
    for (let [i, row] of rows.entries()) {
      // Create the index, and entry from each row.
      let [first, second] = row.toLowerCase().trim().split("_"); // Create 'first' and 'second' word variables splitting at _
      second = second[0].toUpperCase() + second.slice(1);
      let camelWord = (first + second).padEnd(20);
      console.log(`${camelWord}${"✅".repeat(i + 1)}`); // Since this was desctructured, we can access the index i from the for loop, add 1 to start 1, and add teh checkmark = to the index for each iteration.
    }
  });

// function trimAndCamel(word) {
//   let newWordEdit = word.toLowerCase().trim().replaceAll(" ", "").split("_");
//   let firstWord = newWordEdit[0];
//   console.log(firstWord);
//   let secondWordFirstLetter = newWordEdit[1];
//   secondWordFirstLetter = secondWordFirstLetter[0].toUpperCase();
//   let restOfSecondWord = newWordEdit[1].slice(1);
//   let secondWord = secondWordFirstLetter + restOfSecondWord;
//   let trimmedWord = firstWord + secondWord;
//   console.log(`${trimmedWord}`);
//   return trimmedWord;
// }

// function changeToCamelCase(word) {
//   trimAndCamel(word);
// }
