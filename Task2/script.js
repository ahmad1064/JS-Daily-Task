// Forms, Input & Validation
let userName = document.getElementById("userName");
let passwordInput = document.getElementById("passwordInput");
let loginBtn = document.getElementById("loginBtn");
let error = document.getElementById("error");
let success = document.getElementById("success");
let form = document.getElementById("form");

loginBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let user = userName.value;
    let pass = passwordInput.value;

    // Clear previous messages
    error.textContent = "";
    success.textContent = "";

    if (user === "" && pass === "") {
        error.textContent = `Please enter name & password`;
    } else if (user === "") {
        error.textContent = `Please enter name`;
    } else if (pass === "") {
        error.textContent = `Please enter password`;
    } else {
        success.textContent = `Login Successful`;
    }

    form.reset();
})