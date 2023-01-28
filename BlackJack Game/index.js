
let player = {
    name: "Prashant",
    chips: 200
}
let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1  
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    } 
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "  
    for (let i = 0; i < cards.length; i++) {
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
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    //console.log(cards)
    renderGame()
    }   
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


//  Practice on Objects
   
    let person = {
        name: "Ram",
        age: 24,
        country: "India" 
    }
    function logData() {
       console.log( person.name + " is " + person.age + " years old and lives in "
       + person.country ) 
    }
    logData()
 
//  Practice on Array and Loop
    
    let largeCountries = ["Chain","India","USA","Indonesia","Brazil"]
    for (i = 0; i < largeCountries.length ; i ++) {
        console.log("- " + largeCountries[i])
    }

//  Game
    let hands = ["rock", "paper", "scissor"]
    function getHand() {
       let randomIndex = Math.floor( Math.random() * 3)
       return hands[randomIndex]
    } 
    console.log( getHand()) 
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