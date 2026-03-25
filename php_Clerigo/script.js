const username = document.getElementById('username');
const password = document.getElementById('password');

const loginbtn = document.getElementById('loginBtn');
const signupbtn = document.getElementById('signupBtn');

if (loginbtn){
    loginbtn.addEventListener("click", emptyMessage);
}

if (signupbtn){
signupbtn.addEventListener("click", emptyMessage);
}

function emptyMessage(event) {
    if (username.value === "" || password.value === ""){
        event.preventDefault();
        alert ("Please Fill all out!");
    }
}

