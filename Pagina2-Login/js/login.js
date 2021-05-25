const form = document.getElementById("form");
const userName = document.getElementById("userN");
const email = document.getElementById("mail");
const password = document.getElementById("userp");
const inputs = form.querySelectorAll('input')


for(let input of inputs) {
    input.addEventListener("input", function(e) {
       
        checkInputs()
    })
}

form.addEventListener("input", function(e) {
    e.preventDefault()
    checkInputs()
})


function checkInputs() {
    const usernameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(usernameValue === '') {
        setErrorFor(userName, "Username cannot be blank");
    } else {
        setSuccessFor(userName)
    }

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
        setErrorFor(password, "Password must contain between 8 and 15 charcaters")
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

