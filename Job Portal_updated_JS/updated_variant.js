let jobTitleInput = document.querySelector("#jobTitle") 
let companyInput = document.querySelector("#company")
let locationInput = document.querySelector("#location")
let expInput = document.querySelector("#expRequest")
let submitBtn = document.querySelector("button")
let container = document.querySelector(".cardsContainer") 
let searchInput = document.querySelector("#search")

let jobs = []

submitBtn.addEventListener("click", addJob)

if(searchInput){
    searchInput.addEventListener("keyup", showJobs)
}

function addJob() {

    let title = jobTitleInput.value
    let company = companyInput.value
    let location = locationInput.value
    let exp = expInput.value

    if(title == "" || company == "" || location == "" || exp == ""){
        alert("dhang se bharlo bhai")
        return
    }

    jobs.push({
        id: Date.now(),
        title: title,
        company: company,
        location: location,
        exp: exp
    })

    showJobs()

    jobTitleInput.value = ""
    companyInput.value = ""
    locationInput.value = ""
    expInput.value = ""
}

function showJobs(){

    container.innerHTML = ""

    let searchText = ""
    if(searchInput){
        searchText = searchInput.value.toLowerCase()
    }

    for(let i = 0; i < jobs.length; i++){

        if(
            jobs[i].title.toLowerCase().includes(searchText) ||
            jobs[i].company.toLowerCase().includes(searchText) ||
            jobs[i].location.toLowerCase().includes(searchText) ||
            jobs[i].exp.toLowerCase().includes(searchText)
        ){

            let card = document.createElement("div")

            card.innerHTML = `
            <h2>${jobs[i].title}</h2>
            <h3>${jobs[i].company}</h3>
            <p>${jobs[i].location}</p>
            <p>${jobs[i].exp} years experience required</p>
            <button onclick="updateJob(${jobs[i].id})">Update</button>
            <button onclick="deleteJob(${jobs[i].id})">Delete</button>
            `

            container.appendChild(card)
        }
    }
}

function updateJob(id){

    for(let i = 0; i < jobs.length; i++){

        if(jobs[i].id == id){

            let newTitle = prompt("Enter new title", jobs[i].title)
            let newCompany = prompt("Enter new company", jobs[i].company)
            let newLocation = prompt("Enter new location", jobs[i].location)
            let newExp = prompt("Enter new experience", jobs[i].exp)

            if(newTitle) jobs[i].title = newTitle
            if(newCompany) jobs[i].company = newCompany
            if(newLocation) jobs[i].location = newLocation
            if(newExp) jobs[i].exp = newExp

            break
        }
    }

    showJobs()
}

function deleteJob(id){

    for(let i = 0; i < jobs.length; i++){
        if(jobs[i].id == id){
            jobs.splice(i, 1)
            break
        }
    }

    showJobs()
}
