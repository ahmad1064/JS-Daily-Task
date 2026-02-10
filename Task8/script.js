let passwordBtn = document.getElementById("passwordBtn");
let result = document.getElementById("result");

passwordBtn.addEventListener("click", function() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$&";
    let password = "";

    for (let i = 0; i < 8; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }
    result.innerText = password;
})