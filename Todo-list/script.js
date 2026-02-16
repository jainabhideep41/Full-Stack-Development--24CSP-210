let input = document.getElementById("input1");
let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");
let list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let data = input.value.trim();

    if (data === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = data;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    let smallDelete = document.createElement("span");
    smallDelete.textContent = " ❌";
    smallDelete.style.cursor = "pointer";

    smallDelete.addEventListener("click", function(e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(smallDelete);
    list.appendChild(li);

    input.value = "";
}

deleteBtn.addEventListener("click", function() {
    let num = prompt("Enter task number to delete:");
    let tasks = list.querySelectorAll("li");

    if (num && num > 0 && num <= tasks.length) {
        tasks[num - 1].remove();
    } else {
        alert("Invalid task number!");
    }
});
