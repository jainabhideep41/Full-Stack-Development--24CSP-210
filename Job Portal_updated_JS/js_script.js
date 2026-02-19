let jobTitleInput = document.querySelector("jobTitle") 
let companyInput = document.querySelector("#company")
let locationInput = document.querySelector("#location")
let expInput = document.querySelector("#expRequest")
let submitBtn = document.querySelector("button")
let container = document.querySelector(".cardsContainer") 

submitBtn.addEventListener("click", addJob)

function addJob() {
    let title = jobTitleInput.value
    let company = companyInput.value
    let location = locationInput.value
    let exp = expInput.value

    if (title == "" || company == "" || location == "" || exp == "") {
        alert("dhang se bharlo bhai")
        return
    }

    let card = document.createElement("div")

   card.innerHTML=`
   <h2>${title}</h2>
    <h3>${company}</h3>
    <p>${location}</p>
    <p>${exp} years experience required</p>

   `

    container.appendChild(card)


    jobTitleInput.value = ""
    companyInput.value = ""
    locationInput.value = ""
    expInput.value = ""
}

