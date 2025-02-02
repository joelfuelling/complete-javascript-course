/* 
Let's build a simple poll app! 
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.

Your tasks: 
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things: 
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this: 
What is your favourite programming language? 
0: JavaScript 
1: Python 
2: Rust 
3: C++ 
(Write option number) 
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?) 
2. Call this method whenever the user clicks the "Answer poll" button. 
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string' 
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".  
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call. 
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation? 
 

*/

const poll = {
  question: "What is the best biome in Valheim?",
  options: [
    "0: Meadows",
    "1: Black Forest",
    "2: Swamp",
    "3: Mountains",
    "4: Plains",
    "5: Mistlands",
  ],
  answers: new Array(6).fill(0),

  registerNewAnswer() {
    let userInput = Number(
      prompt(
        `${this.question} \n ${this.options[0]} \n ${this.options[1]} \n ${this.options[2]} \n ${this.options[3]} \n ${this.options[4]} \n ${this.options[5]} \n(Write option number)`
      )
    );
    // Or, Jonas' way...
    //     let newInput =
    //       prompt(`${this.question}\n${this.options.join(
    //         "\n"
    //       )}\n(Write Option number)
    // `,
    if (userInput > -1 || userInput < this.options.length - 1) {
      userInput = userInput * 1;
    }
    userInput < 0 || userInput > this.options.length - 1
      ? alert(
          `${userInput} is not a number between 0 and ${this.options.length - 1}
        `
        )
      : "";
    // Or, the Jonas way. Using Short circuiting
    // typeof answer === 'number' && answer < this.answers.length && this.answers[answer] += 1
    const answer = (this.answers[userInput] += 1);
    this.displayResults();
  },

  displayResults(type = "string" || "array") {
    if (typeof type === "string")
      alert(`Poll results are ${this.answers.join(", ")}`);
    if (typeof type === "array") console.log(type);
  },
};

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

const pollButton = document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
