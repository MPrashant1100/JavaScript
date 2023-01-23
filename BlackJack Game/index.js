let firstCard = 5
let secondCard = 9
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
     renderGame
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You got "
        hasBlackJack = true
    } else {
        message = "You are out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
    // render out all the cards we have
    sumEL.textContent ="Sum: " + sum
    // render out first and second card
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}

function newCard() {
    let card = 7
    sum += card
    renderGame()
}

// Array - ordered list of items - composite / complex data type 
// push - to add an array

// case out


/*
// Practice if-else

let age = 102

if (age < 100) {
    console.log("Not elegible")
} else if(age == 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}
*/