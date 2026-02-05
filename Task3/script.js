let nameInput = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");
let output = document.getElementById("output");

// Save the name to local storage when the button is clicked
let savedName = localStorage.getItem("savedName");
if (savedName) {
    output.textContent = `Saved Name: ${savedName}`;
}

saveBtn.addEventListener("click", function() {
    let name = nameInput.value;
    localStorage.setItem(`savedName`, name);
    output.textContent = `Saved Name: ${name}`;
})