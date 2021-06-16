const form = document.getElementById("form");
const userName = document.getElementById("userN");
const email = document.getElementById("mail");
const password = document.getElementById("userp");
const inputs = form.querySelectorAll('input')


for(let input of inputs) {
    input.addEventListener("input", function() {
       
        checkInputs()
    })
}

form.addEventListener("submit", function(e) {

    const checkEmail = email.value;
    const checkPassword = password.value;

    
    if (checkEmail === "" || checkPassword === ""){
       e.preventDefault()
    }

    checkInputs()
})


function checkInputs() {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if (emailValue === '') {
        setErrorFor(email, "Email cannot be blank")
    } else if (!emailValue.includes("@") || !emailValue.includes(".") ){
        setErrorFor(email, "Must contain @ and .")
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, "Password cannot be blank")
    } else if (passwordValue.length < 8 || passwordValue.length > 15) {
        setErrorFor(password, "Must contain between 8 and 15 charcaters")
    }else {
        setSuccessFor(password)
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

