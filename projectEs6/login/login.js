let email = document.getElementById("email")
let pass = document.getElementById("pass")

function login (event) {
    event.preventDefault();

    let savedEmail = localStorage.getItem("email")
    let savedPass = localStorage.getItem("password")


    if (email.value.trim() == savedEmail && pass.value === savedPass) {
        localStorage.setItem("loggedIn","true")
        alert("Login successful! Welcome back.");
        window.location.href = "../home/Home.html";
    
    }else alert ("Invalid password or Email")
}

document.querySelector("form").addEventListener("submit", login);




// ==============
