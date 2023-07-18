/*This is more of a thinking challenge than a coding challenge 🤓 
Your tasks: 
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again! 
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example. 
 */

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("html").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

function hello() {
  console.log("hello");
}

//* How does the callback function get access to the header variable?
// The closure! At the time the 'html' is clicked, the header variable and style are stored in the closure/"backpack, So, the event listener function has access to the needed variables even though the IIFE has been executed and is "already gone", and with it the header variables is also "already gone".
