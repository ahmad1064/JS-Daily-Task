let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");

addBtn.addEventListener("click", function() {
    let sum = parseFloat(num1.value) + parseFloat(num2.value);
    result.value = sum;
    result.innerText = `Result: ${sum}`;
})

subBtn.addEventListener("click", function() {
    let minus = parseFloat(num1.value) - parseFloat(num2.value);
    result.value = minus;
    result.innerText = `Result: ${minus}`;
})

mulBtn.addEventListener("click", function() {
    let product = parseFloat(num1.value) * parseFloat(num2.value);
    result.value = product;
    result.innerText = `Result: ${product}`;
})

divBtn.addEventListener("click", function() {
    let quotient = parseFloat(num1.value) / parseFloat(num2.value);
    result.value = quotient;
    result.innerText = `Result: ${quotient}`;
})

addBtn.addEventListener("click", function() {
    if (num2.value === 0) {
        result.value = "Error: Division by zero";
        result.innerText = "Error: Division by zero";
    }
})

