const firstName = document.querySelector('[name="firstName"]');
const lastName = document.querySelector('[name="lastName"]');
const email = document.querySelector('[name="email"]');

const firstNameError = document.querySelector("#firstName-validation");
const lastNameError = document.querySelector("#lastName-validation");
const emailError = document.querySelector("#email-validation");

//First Name Validation
firstName.addEventListener('blur',()=>{
    if(firstName.value.trim()===""){
        firstNameError.textContent="*Please fill in this field."
    }
    else{
        firstNameError.textContent="";
    }
})

firstName.addEventListener('focus',()=>{
    firstNameError.textContent = "";
})

//Second Name Validation
lastName.addEventListener('blur',()=>{
    if(lastName.value.trim()===""){
        lastNameError.textContent="*Please fill in this field."
    }
    else{
        lastNameError.textContent="";
    }
})

lastName.addEventListener('focus',()=>{
    lastNameError.textContent = "";
})

//Email Validation
email.addEventListener('blur',()=>{  
    if(email.value.trim()!==""){  
        if(!email.checkValidity()){
            emailError.textContent ="*Please enter valid email.";
        }
        else{
            emailError.textContent ="";
        }
    }
    else{
        emailError.textContent = "*Please fill in this field."
    }
})

email.addEventListener('focus',()=>{
    emailError.textContent ="";
})