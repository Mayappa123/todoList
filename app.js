var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
document.addEventListener("DOMContentLoaded", function () {
  renderTasks();
  document.getElementById("addTaskBtn").addEventListener("click", addTask);
});

function addTask() {
  var input = document.getElementById("taskInput");
  var dueDate = document.getElementById("dueDate");
  var taskText = input.value.trim();
  var date = dueDate.value;
  if (taskText !== "") {
    var task = {
      text: taskText,
      dueDate: date,
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
    <div class="task-container">
        <span>${task.text}</span>
        <span>Due Date: ${task.dueDate}</span>
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
  });
  ul1.appendChild(li);
}





function renderTasks() {
  tasks.forEach(function (task) {
    renderTask(task);
  });
}
