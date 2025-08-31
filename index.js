let taskList = document.getElementById("taskList");
let themeToggleBtn = document.querySelector(".theme-toggle");

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskDateTime = document.getElementById("taskDateTime");
    let taskText = taskInput.value.trim();
    let taskTime = taskDateTime.value;

    if (taskText === "") return alert("Please enter a task!");
    
    let li = document.createElement("li");
    let details = document.createElement("div");
    details.className = "task-details";
    let taskTitle = document.createElement("strong");
    taskTitle.textContent = taskText;

    let taskDate = document.createElement("small");
    taskDate.textContent = taskTime ? new Date(taskTime).toLocaleString() : "No Date";

    details.appendChild(taskTitle);
    details.appendChild(document.createElement("br"));
    details.appendChild(taskDate);

    let actions = document.createElement("div");
    actions.className = "actions";

    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✔";
    completeBtn.title = "Mark Completed";
    completeBtn.onclick = () => {
      taskTitle.classList.toggle("completed");
    };

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "✏";
    editBtn.title = "Edit Task";
    editBtn.onclick = () => {
      let newTask = prompt("Edit Task:", taskTitle.textContent);
      if (newTask) taskTitle.textContent = newTask;
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑";
    deleteBtn.title = "Delete Task";
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(details);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = "";
    taskDateTime.value = "";
}

function toggleTheme() {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      themeToggleBtn.textContent = "🌙 Dark Mode";
    } else {
      themeToggleBtn.textContent = "☀️ Light Mode";
    }
}