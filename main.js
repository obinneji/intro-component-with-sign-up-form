let form = document.getElementById("form")
let firstNameEl = document.getElementById("firstname")
let lastNameEl = document.getElementById("lastname")
let emailEl = document.getElementById("email")
let passwordEl = document.getElementById("password")



const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInputs()
})
// set error function
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}
const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    inputControl.classList.remove("error")
    inputControl.classList.add("success")
}

const validateInputs = () => {
    const firstnameValue = firstNameEl.value.trim()
    const lastnameValue = lastNameEl.value.trim()
    const emailValue = emailEl.value.trim()
    const passwordValue = passwordEl.value.trim()
    
    if(firstnameValue === ""){
        setError(firstNameEl, "First Name cannot be empty")
    }else{
        setSuccess(firstNameEl)
    }
    if(lastnameValue === ""){
        setError(lastNameEl, "Last Name cannot be empty")
    }else{
        setSuccess(lastNameEl)
    }
    if(emailValue === ""){
        setError(emailEl, "Email cannot be empty")
    } else if (!isEmailValid(emailValue)){
        setError(emailEl, "Please provide a valid email")
    }
    else{
        setSuccess(emailEl)
    }
    if(passwordValue === ""){
        setError(passwordEl, "Password cannot be empty")
    }else{
        setSuccess(passwordEl)
    }
}
