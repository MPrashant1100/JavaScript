let saveEl =document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

// Increments the counter
function increment() {
    count += 1 ;
    countEl.innerText = count;
}

// Deccrements the counter
function decrement() {
    count -= 1 ;
    countEl.innerText = count;
}

// Saves the counter
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count);
    countEl.textContent = 0
    count = 0
}

