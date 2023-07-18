'use strict';

// Example of DOM access.
// Selecting the element with the 'message class.
/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13



console.log(document.querySelector('.guess').value = 23)
*/

// Adding 1 to the 20 below allows 19.97234, to be 20 (using trunc)


//? We went a bit crazy with refactoring, but it's good practice! Each of the functions below for DRY principles in coding.
function displayMessage(message){
    document.querySelector('.message').textContent = message
}
function backgroundColor(color){
    document.querySelector('body').style.backgroundColor = color
}
function numberDivWidth(number){
    document.querySelector('.number').style.width = number
}
function placeSecretNum(secNum){
    document.querySelector('.number').textContent = secNum
}
function adjustScore(score){
    document.querySelector('.score').textContent = score
}

let secretNumber = Math.trunc(Math.random() *50 +1)
let score = 15
let highscore = 0


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    //* When there is no '.guess' input
    if(!guess){
        displayMessage('No Number!')

    //* When player guesses/wins
    }else if (guess === secretNumber) {
        displayMessage('Correct Number!')
        backgroundColor('#60b347')
        numberDivWidth('30rem')
        placeSecretNum(secretNumber)

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    //* When guess is wrong.
    //* Handle higher or lower guess
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score --
            adjustScore(score)
    }else {
        displayMessage('You lost the game!')
        adjustScore(0)
    }
}

document.querySelector('.again').addEventListener('click', function () {
    score = 15
    document.querySelector('.score').textContent = score
    secretNumber = Math.trunc(Math.random() *50 +1)
    backgroundColor('#222')
    displayMessage('Start guessing...')
    numberDivWidth('15rem')
    placeSecretNum('?')
    document.querySelector('.guess').value = ''
    })
})
