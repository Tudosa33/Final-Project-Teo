const form = document.getElementById("form")
const firstName = document.getElementById("firstN")
const lastName = document.getElementById("lastN")
const mail = document.getElementById("mail")
const password = document.getElementById("userp")
const city = document.getElementById("city")
const country = document.getElementById("country")

form.addEventListener("submit", function(e) {

    const checkEmail = mail.value;
    const checkPassword = password.value;
    const checkFirstName = firstName.value;
    const checkFLastName = lastName.value;
    const checkCity = city.value;
    const checkCountry = country.value;

    
    if (checkEmail === "" || checkPassword === "" || checkFirstName === "" || checkFLastName === "" || checkCity === "" || checkCountry === "" ){
       e.preventDefault()
    } else {
        console.log("ok")
    }

    checkInputs()
})

form.addEventListener("input", function() {

    checkInputs()
})

function checkInputs() {
    const firstNameValue = firstName.value.trim()
    const lastNametValue = lastName.value.trim()
    const emailValue = mail.value.trim()
    const passwordValue = password.value.trim()
    const cityValue = city.value.trim()
    const countryValue = country.value.trim()

    
    
    if(firstNameValue === '') {
        setErrorFor(firstName, "First Name lane cannot be blank")
    } else {
        setSuccessFor(firstName)
    }

    if(lastNametValue === "") {
        setErrorFor(lastName, "Last Name cannot lane be blank")
    } else {
        setSuccessFor(lastName)
    }

    if(emailValue === "") {
        setErrorFor(mail, "Email lane cannot be empty")
    } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        setErrorFor(mail, "Email must contain @ and .")
    } else {
        setSuccessFor(mail)
    }

    if(passwordValue === "") {
        setErrorFor(password, "Password lane cannot be empty")
    } else if (passwordValue.length < 8 || passwordValue.length > 15) {
        setErrorFor(password, "Must contain between 8 and 15 characters")
    } else {
        setSuccessFor(password)
    }

    if(cityValue === "") {
        setErrorFor(city, "City lane cannot be empty")
        
    } else {
        setSuccessFor(city)
    }

    if(countryValue === "") {
        setErrorFor(country, "Country lane cannot be empty")
    } else {
        setSuccessFor(country)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error"

}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control success"
    
}