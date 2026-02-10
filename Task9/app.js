let bulb = document.getElementById("bulb");
let onBtn = document.getElementById("onBtn");
let offBtn = document.getElementById("offBtn");

onBtn.addEventListener("click", () => {
      bulb.classList.add("on");
      bulb.classList.remove("off");
    });

    offBtn.addEventListener("click", () => {
      bulb.classList.add("off");
      bulb.classList.remove("on");
    });