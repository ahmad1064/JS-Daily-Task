let taskInput = document.getElementById("taskInput");
let taskBtn = document.getElementById("taskBtn");
let taskList = document.getElementById("taskList");

taskBtn.addEventListener("click", function() {
    let task = taskInput.value;

    if (task) {
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = "";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.border = "none";
        deleteBtn.style.background = "none";
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        })
    }

    if (!task) {
        alert("Please enter a task!");
    }
})