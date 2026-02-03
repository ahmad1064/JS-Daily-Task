// 🟢 TASK 5 — DOM Manipulation + Events
let countNumber = document.getElementById("countNumber");
let increaseCount = document.getElementById("increaseCount");
let decreaseCount = document.getElementById("decreaseCount");
let resetCount = document.getElementById("resetCount");
let count = 0;

increaseCount.addEventListener("click", function() {
    count++;
    countNumber.innerText = count;

    if (count === 0) {
        countNumber.style.color = "black";
    } else if (count < 0) {
        countNumber.style.color = "red";
    } else {
        countNumber.style.color = "green";
    }
})

resetCount.addEventListener("click", function() {
    count = 0;
    countNumber.innerText = count;
    countNumber.style.color = "black";
})

decreaseCount.addEventListener("click", function() {
    count--;
    countNumber.innerText = count;
    if (count < 0) {
        countNumber.style.color = "red";
    } else if (count === 0) {
        countNumber.style.color = "black";
    } else {
        countNumber.style.color = "green";
    }
})