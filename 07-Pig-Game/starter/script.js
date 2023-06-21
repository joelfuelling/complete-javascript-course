'use strict';

//* Player 1 rolls a dice
    //! Until a 1 is rolled, the rolls get added to the active players current score, accumulating with each new roll.
        // This is completed with the Roll Dice button.
    // When a 1 is rolled...
        //! the current score is set to 0 and player 2 becomes active.
// To start, no dice image is dispalyed on the screen
    // With each roll, the diceImage corresponding to the dice roll is displayed

// Whichever player reaches 100 first wins
    // Lock game functionality (Roll Dice, and Hold buttons) when there is a winner.
    // Reset the game State when the New Game button is pressed.


// Create the elements to setup roll scores.
const rollDice = document.querySelector('.btn--roll')
const newGame = document.querySelector('.btn--new')
const holdScore = document.querySelector('.btn--hold')
const diceImage = document.querySelector('.dice')

let score0El = document.getElementById('score--0')
let score1El = document.getElementById('score--1')
score0El.textContent = 0
score1El.textContent = 0

let current0El = document.getElementById('current--0')
let current1El = document.getElementById('current--1')
// Select the player elements for "switchPlayer" usability.
let player0El = document.querySelector('.player--0')
let player1El = document.querySelector('.player--1')

let currentScore = 0
let activePlayer = 0
let playing = true
let scores = [0,0]

const currentPlayerScore = document.getElementById(`current--${activePlayer}`)

//Create the starting "state" of the game when the new game buttin is pressed (see bottom of this code)
function init(){
    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent= 0
    current1El.textContent = 0
    scores = [0,0]
    currentScore = 0
    diceImage.classList.add('hidden')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    activePlayer = 0
    playing = true
}
init()

//Switch the players.
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    // Player0 becomes 1, or player1 becomes 0!
    activePlayer = activePlayer === 0 ? 1 : 0
    // Toggle visuals/CSS with each player switch
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
    // Add current score to active players array held score, at either index of 0 or 1.
    scores[activePlayer] += currentScore
}

rollDice.addEventListener('click', function(){
    if(playing){
    // Generate a # between 1 and 6.
    const dice = Math.trunc(Math.random() * 6) +1
    // Dipslay the dice image of the current players roll.
    diceImage.classList.remove('hidden')
    diceImage.src = `dice-${dice}.png`
    // If 2-6 are rolled...
    if(dice !== 1){
        currentScore += dice
        
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        //Update the current score 
    } else {
        // When a 1 is rolled, reset the current score to 0, reset the score textbox, and switch players
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        // Player0 becomes 1, or player1 becomes 0!
        activePlayer = activePlayer === 0 ? 1 : 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
}
})


// Hold button functionality

holdScore.addEventListener('click', function(){
    if(playing){
    //! 1st, add the score to the scores array. Doing this 2nd always leave it as 0.
    scores[activePlayer] += currentScore
    // 2nd, set the active players score text to the currentscore held within the accumulative scores array of the active player.
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    if(scores[activePlayer] >= 10){
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        playing = false
        diceImage.classList.add('hidden')
    } else{
        switchPlayer()
    }
    }
})

newGame.addEventListener('click', function(){
    init()
})


















// Round 1
// const newGameButton = document.querySelector('.btn--new')
// const rollDiceButton = document.querySelector('.btn--roll')
// const holdScoreButton = document.querySelector('.btn--hold')
// let diceImage = document.querySelector('.dice')

// //Selecting Elements

// // player 1 and 2 scores
// const score0El = document.getElementById('score--0')
// const score1El = document.getElementById('score--1')
// // player 1 and 2 CSS active-status.
// const player0El = document.querySelector('.player--0')
// const player1El = document.querySelector('.player--1')

// const current0El = document.getElementById('current--0')
// const current1El = document.getElementById('current--1')
// // Keeping track of the score per player.
// score0El.textContent = 0
// score1El.textContent = 0
// diceImage.classList.add('hidden')

// let scores = [0, 0]
// let currentScore = 0
// let activePlayer = 0
// // Game being "on" of "off" with playing variable.
// let playing = true

// const init = function() {
//     score0El.textContent = 0
//     score1El.textContent = 0
//     diceImage.classList.add('hidden')
//     scores = [0, 0]
//     currentScore = 0
//     document.getElementById(`current--${activePlayer}`).textContent = 0
//     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
//     player0El.classList.add('player--active')
//     activePlayer = 0
//     playing = true
// }
// init()

// const switchPlayer = function() {
//     // Switching current players
//     document.getElementById(`current--${activePlayer}`).textContent = 0
//     currentScore = 0
//     //! Set the activePlayer to 1 if the activePlayer is 0. Otherwise, set it to 0.
//     activePlayer = activePlayer === 0 ? 1 : 0
//     //! Using .toggle to switch both player0/player1 class at the same time!
//     player0El.classList.toggle('player--active')
//     player1El.classList.toggle('player--active')
//     current0El.textContent = 0
// }


// //Rolling the dice function
// rollDiceButton.addEventListener('click', function(){
//     if(playing){
//         // Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6 + 1)
    
//     // Displaying the dice
//         diceImage.classList.remove('hidden')
//         //*  Changing the image depending on the dice roll!
//         diceImage.src= `dice-${dice}.png`
//     //check for rolled 1
//         if(dice !== 1){
//             // Add dice to the current store.
//             currentScore += dice
//             //! Select the current player dynamically
//             document.getElementById(`current--${activePlayer}`).textContent = currentScore
//         }else {
//             switchPlayer()
//         }
//     }
// })

// holdScoreButton.addEventListener('click', function(){
//     if (playing){
//     // Add current score to score of active player.
//     scores[activePlayer] += currentScore
//     // scores[1] = scores[1] + currentScore
//     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
//     // check if players score is >= 100
//     if(scores[activePlayer] >= 10) {
//         playing = false
//         document
//             .querySelector(`.player--${activePlayer}`).classList.add('player--winner')
//         document
//             .querySelector(`.player--${activePlayer}`).classList.remove('player--active')
//         diceImage.classList.add('hidden')
//     }else {
//         // Switch to the next player.
//         switchPlayer()
//     }
//     } 
// })

// newGameButton.addEventListener('click', function(){
//     init()
// })
