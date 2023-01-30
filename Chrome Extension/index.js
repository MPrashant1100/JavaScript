

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")  // getEle. use for fetch something 
let deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads =leadsFromLocalStorage
    reader(myLeads)
}


tabBtn.addEventListener("click",function() {   
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        reader(myLeads)

   })

    
})

function reader(leads) {
    let listItems = " "
    for (let i = 0; i < leads.length; i++) {
    //  listItems += "<li><a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
     listItems += 
           `<li>
                <a target='_blank' href=' ${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`        
    }
    ulEl.innerHTML = listItems
}
deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear()
    myLeads = []
    reader(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)           // to push into the array
    inputEl.value = ""                    // clear out the input field
    localStorage.setItem("myLeads",JSON.stringify(myLeads) )
    reader(myLeads)
})




    /* 
// Practice of template string 
    const recioient = "PM"
    const email = ` Hey ${recioient} !How is it going? Cheers Per`
    console.log(email)


// This is the alternate method of line which is 
    ulEl.innerHTML += "<li>" .........

    let li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)

// localStorage 
        
   localStorage.setItem("myName","Prashant Mishra")
   let name = localStorage.getItem("myName")
   console.log(name)
   localStorage.clear()


// Function Prop

    function add(a,b) {
        return a+b
    }
    console.log(add(3,4))
    console.log(add(13,400))
    
// Arrays as Parameter

    function getFirst(arr) {
        return arr[0]
    }
    let firstCard = getFirst([5,6,7,8])
    console.log(firstCard)
*/ 
 