var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.addEventListener("DOMContentLoaded", function () {
  renderTasks();

  document.getElementById("addTaskBtn").addEventListener("click", addTask);
});

function addTask() {
  var input = document.getElementById("taskInput");
  var dueDate = document.getElementById("dueDate").value;

  var taskText = input.value.trim();

  if (taskText !== "") {
    var task = {
      text: taskText,
      dueDate: dueDate,
      completed: false,
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask(task);

    input.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function renderTask(task) {
  var ul1 = document.getElementById("list-container");
  var li = document.createElement("li");
  li.innerHTML = `
        <span>${task.text}</span>
        <span>Due-Date: ${task.dueDate}</span>
        <Button class="markasDone">${
          task.completed ? "Delete" : "Mark as Done"
        }</Button>
      `;
  li.addEventListener("click", function () {
    var markasDoneBtn = li.querySelector(".markasDone");
    if (markasDoneBtn.innerText === "Mark as Done") {
      markasDoneBtn.innerText = "Delete";
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
  });
  ul1.appendChild(li);
}

function renderTasks() {
  tasks.forEach(function (task) {
    renderTask(task);
  });
}
