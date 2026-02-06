let loadBtn = document.getElementById("loadBtn");
let userList = document.getElementById("userList");

loadBtn.addEventListener("click", async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();

        userList.innerHTML = "";

        users.forEach(user => {
            let li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    } catch (error) {
        userList.innerHTML = "<li>Error loading users</li>";
    }
});