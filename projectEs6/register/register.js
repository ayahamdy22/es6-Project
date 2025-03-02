let name = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let confirm_pass = document.getElementById("confirm_pass")
let register= document.getElementById("register")
let invalidName = document.getElementById("invalidName")
let invalidEmail = document.getElementById("invalidEmail")
let invalidPass = document.getElementById("invalidPass")
let invalidPassConf = document.getElementById("invalidPassConf")


function registerFun (event) {
    event.preventDefault();
    let isValid = true;

    // validation name
    if(!/^[a-zA-Z\s]{6,}$/.test(name.value)) {

        invalidName.style.display="block"
        isValid = false;

    }else invalidName.style.display="none"
     
    //  validation email
    if(!/^[a-z][a-z0-9_]+@[a-z]{5,}\.com$/.test(email.value.trim())) { 
         invalidEmail.style.display="block"
         isValid = false;
    
    }else invalidEmail.style.display="none"

    // validation password 
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*?!])[a-zA-Z\d@#$%&*?!]{8,}/.test(pass.value)) {
         invalidPass.style.display="block"
         isValid = false;
    
    }else invalidPass.style.display="none"

    // validation Confirm password 
    if (confirm_pass.value != pass.value) {
        invalidPassConf.style.display="block"
        isValid = false;

    }else invalidPassConf.style.display="none"



    if (isValid) {
        localStorage.setItem ("email", email.value.trim())
        localStorage.setItem ("password", pass.value.trim())
        localStorage.setItem("username", name.value)
        alert("Registration successful! Now login")
        window.location.href = "../login/login.html";
    }

}

document.querySelector("form").addEventListener("submit", registerFun);

