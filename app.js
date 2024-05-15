// app.js

var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.addEventListener("DOMContentLoaded", function () {
  renderTasks();
  document.getElementById("addTaskBtn").addEventListener("click", addTask);

  if (tasks.length === 0) {
    var ul = document.getElementById("list-container");
    var defaultLi = document.createElement("li");
    defaultLi.textContent = "You don't have any tasks.";
    defaultLi.classList.add("default-message");
    ul.appendChild(defaultLi);
  }
});

function addTask() {
  var input = document.getElementById("taskInput");
  var dueDate = document.getElementById("dueDate");
  var taskText = input.value.trim();
  var date = dueDate.value;
  if (taskText !== "" && dueDate.value !== "") {
    var task = {
      text: taskText,
      dueDate: date,
      completed: false,
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(task);
    input.value = "";

    var ul = document.getElementById("list-container");
    var defaultLi = ul.querySelector(".default-message");
    if (defaultLi) {
      ul.removeChild(defaultLi);
    }
  } else {
    alert("Please enter a task!");
  }
}

function renderTask(task) {
  var ul1 = document.getElementById("list-container");
  var li = document.createElement("li");
  li.innerHTML = `
    <div class="task-container">
        <span class="task-name">${task.text}</span>
        <span>Due-Date: ${task.dueDate}</span>
        <button class="markAsDone">${
          task.completed ? "Delete" : "Mark as Done"
        }</button>
    </div>
  `;
  var markAsDoneBtn = li.querySelector(".markAsDone");
  if (task.completed) {
    markAsDoneBtn.style.backgroundColor = "red";
    markAsDoneBtn.style.color = "#fff";
  } else {
    markAsDoneBtn.style.backgroundColor = "green";
    markAsDoneBtn.style.color = "#fff";
  }
  li.addEventListener("click", function () {
    if (markAsDoneBtn.innerText === "Mark as Done") {
      markAsDoneBtn.innerText = "Delete";
      markAsDoneBtn.style.backgroundColor = "red";
      task.completed = true;
    } else {
      var index = tasks.indexOf(task);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
      ul1.removeChild(li);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    li.classList.toggle("complete");

    if (tasks.length === 0) {
      var defaultLi = document.createElement("li");
      defaultLi.textContent = "You don't have any tasks.";
      defaultLi.classList.add("default-message");
      ul1.appendChild(defaultLi);
    }
  });
  ul1.appendChild(li);
}

function sortTasksByDueDate() {
  tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)); // Sort tasks by due date
}

function renderTasks() {
  tasks.forEach(function (task) {
    renderTask(task);
  });
}
