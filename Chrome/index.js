

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push("www.awesomelead.com")           // to push into the array
    console.log(myLeads)
})

