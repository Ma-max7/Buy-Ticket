let country = document.getElementById("countries")
let city = document.getElementById("cities")
let firstName = document.getElementById("firstName")
let firstNameCheck = document.getElementById("nameAlert")
let lastName = document.getElementById("lastName")
let lastNameCheck = document.getElementById("lastNameAlert")
let phoneNumber = document.getElementById("phoneNumber")
let phoneNumberCheck = document.getElementById("phoneAlert")
let email = document.getElementById("email")
let emailCheck = document.getElementById("emailAlert")

let countryName = {
    Iran: ["tehran", "shiraz", "tabriz", "esfehan", "mashhad"],
    Canada: ["torento", "montral", "vankouver", "cherchil"],
    UnitedState: ["new york", "shikago", "washington", "los angles"]
}


firstName.addEventListener("keydown", function () {
    if (firstName.value.length < 12) {
        firstNameCheck.style.display = "block"
        firstNameCheck.style.color = "red"
        firstNameCheck.innerHTML = "not done"
    } else {
        firstNameCheck.style.display = "block"
        firstNameCheck.style.color = "green"
        firstNameCheck.innerHTML = "done"
    }
})

lastName.addEventListener("keydown", function () {
    if (lastName.value.length < 12) {
        lastNameCheck.style.display = "block"
        lastNameCheck.style.color = "red"
        lastNameCheck.innerHTML = "not done"
    } else {
        lastNameCheck.style.display = "block"
        lastNameCheck.style.color = "green"
        lastNameCheck.innerHTML = "done"
    }
})

phoneNumber.addEventListener("keydown", function () {
    if (phoneNumber.value.length < 11) {
        phoneNumberCheck.style.display = "block"
        phoneNumberCheck.style.color = "red"
        phoneNumberCheck.innerHTML = "not done"
    } else if (phoneNumber.value.length > 12) {
        phoneNumberCheck.style.display = "block"
        phoneNumberCheck.style.color = "red"
        phoneNumberCheck.innerHTML = "more than 11 digits"
    } else if (isNaN(phoneNumber.value)) {
        phoneNumberCheck.style.display = "block"
        phoneNumberCheck.style.color = "red"
        phoneNumberCheck.innerHTML = "invalid value"
    }
    else {
        phoneNumberCheck.style.display = "block"
        phoneNumberCheck.style.color = "green"
        phoneNumberCheck.innerHTML = "done"
    }
})

email.addEventListener("keydown", function () {
    if (email.value.indexOf("@") === -1 || email.length < 8) {
        emailCheck.style.display = "block"
        emailCheck.style.color = "red"
        emailCheck.innerHTML = "must be include @ & at least 8"
    } else {
        emailCheck.style.display = "block"
        emailCheck.style.color = "green"
        emailCheck.innerHTML = "done"
    }
})


country.addEventListener("change", function () {

    if (country.value === "Select Country...") {
        city.innerHTML = "<option>Select City...</option>"
    } else {
        let myCountry = countryName[country.value]
        city.innerHTML = ''
        myCountry.forEach(function (cities) {
            city.innerHTML += `<option>${cities}</option>`
        })

    }
})