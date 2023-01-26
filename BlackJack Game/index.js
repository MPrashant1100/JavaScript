
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard] 
let hasBlackJack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    return 5
}

function startGame() {
     renderGame
}

function renderGame() {
    cardsEl.textContent = "Cards: "  
    for (let i = 0; i < cards.length ; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEL.textContent ="Sum: " + sum

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
    
    // render out first and second card
   
}

function newCard() {
    let card = 7
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

// Array - ordered list of items - composite / complex data type 
// push - to add an array

//Counuting in JS
/*
     for (let count =1; count< 11; count += 1) { 
        console.log(count)
     }

    let pens = [7,3,9]
    for ( i = 0 ; i < pens.length; i ++) {
        console.log(pens[i])
    }
*/
/*
//  Call/Invoke one function to other 

    let player1Time = 100
    let player2Time = 121
    
    function totalRaceTime() {
        return player1Time + player2Time        
    }
    let RaceTime = totalRaceTime()
    console.log(RaceTime)

//  Random Practice by making a dice 

    let randomNumber = Math.floor( Math.random() * 6) + 1
    console.log(randomNumber)

    function rollDice() {
        return Math.floor( Math.random() * 6) + 1
    }
    console.log(rollDice())
*/


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