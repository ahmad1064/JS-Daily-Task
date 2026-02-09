let clock = document.getElementById("clock");

function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clock.innerText = `${hours.toString().padStart(2, "0")}: ${minutes.toString().padStart(2,"0")}: ${seconds.toString().padStart(2, "0")}`;
}

updateClock();
setInterval(updateClock, 1000);