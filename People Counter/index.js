

let saveEl =document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1 ;
    countEl.innerText = count;
    
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count);
    countEl.textContent = 0
    count = 0
}

/*

let firstName = "Prashant"
let lastName = "Mishra"
let fullName = firstName + " " + lastName
console.log(fullName)

let name = "PM"
let greeting = "Hi there"

function greetPM() {
    console.log(greetPM = greeting + "," + name + "!")    
}
greetPM()
*/

let myPoint = 3 

function add3Point() {
    myPoint += 3
}

function remove1Point() {
    myPoint -= 1
}
add3Point()
add3Point()
add3Point()
remove1Point()
console.log(myPoint)
