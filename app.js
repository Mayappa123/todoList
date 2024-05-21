// app.js


// var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// document.addEventListener("DOMContentLoaded", function () {
//   renderTasks();
//   document.getElementById("addTaskBtn").addEventListener("click", addTask);

//   if (tasks.length === 0) {
//     var ul = document.getElementById("list-container");
//     var defaultLi = document.createElement("li");
//     defaultLi.textContent = "You don't have any tasks.";
//     defaultLi.classList.add("default-message");
//     ul.appendChild(defaultLi);
//   }
// });

// function addTask() {
//   var input = document.getElementById("taskInput");
//   var dueDate = document.getElementById("dueDate");
//   var taskText = input.value.trim();
//   var date = dueDate.value;
//   if (taskText !== "" && dueDate.value !== "") {
//     var task = {
//       text: taskText,
//       dueDate: date,
//       completed: false,
//     };

//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     renderTask(task);
//     input.value = "";

//     var ul = document.getElementById("list-container");
//     var defaultLi = ul.querySelector(".default-message");
//     if (defaultLi) {
//       ul.removeChild(defaultLi);
//     }
//   } else {
//     alert("Please enter a task!");
//   }
// }

// function renderTask(task) {
//   var ul1 = document.getElementById("list-container");
//   var li = document.createElement("li");
//   li.innerHTML = `
//     <div class="task-container">
//         <span class="task-name">${task.text}</span>
//         <span>Due-Date: ${task.dueDate}</span>
//         <button class="markAsDone">${
//           task.completed ? "Delete" : "Mark as Done"
//         }</button>
//     </div>
//   `;
//   var markAsDoneBtn = li.querySelector(".markAsDone");
//   if (task.completed) {
//     markAsDoneBtn.style.backgroundColor = "red";
//     markAsDoneBtn.style.color = "#fff";
//   } else {
//     markAsDoneBtn.style.backgroundColor = "green";
//     markAsDoneBtn.style.color = "#fff";
//   }
//   li.addEventListener("click", function () {
//     if (markAsDoneBtn.innerText === "Mark as Done") {
//       markAsDoneBtn.innerText = "Delete";
//       markAsDoneBtn.style.backgroundColor = "red";
//       task.completed = true;
//     } else {
//       var index = tasks.indexOf(task);
//       if (index !== -1) {
//         tasks.splice(index, 1);
//       }
//       ul1.removeChild(li);
//     }
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     li.classList.toggle("complete");

//     if (tasks.length === 0) {
//       var defaultLi = document.createElement("li");
//       defaultLi.textContent = "You don't have any tasks.";
//       defaultLi.classList.add("default-message");
//       ul1.appendChild(defaultLi);
//     }
//   });
//   ul1.appendChild(li);
// }

// function renderTasks() {
//   if (tasks.length > 1) {
//     tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
//   }
//   tasks.forEach(function (task) {
//     renderTask(task);
//   });
// }

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let today = document.querySelector("#weekday");
let monthday = document.querySelector("#monthday");
let month = document.querySelector("#month");
let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let ampm = document.querySelector("#ampm");
setInterval(() => {
  let now = new Date();
  let day = days[now.getDay()];
  let monthname = months[now.getMonth()];
  let notArmy = now.getHours() - 12;
  today.innerHTML = `${day}, `;
  monthday.innerHTML = `${now.getDate()} of `;
  month.innerHTML = monthname;
  if (now.getHours() > 12) {
    hour.innerHTML = notArmy;
    ampm.innerHTML = "PM";
  } else {
    hour.innerHTML = now.getHours();
    ampm.innerHTML = "AM";
  }
  minutes.innerHTML = now.getMinutes() + " ";
  if (now.getMinutes() < 10) {
    minutes.innerHTML = "0" + now.getMinutes();
  }
}, 1000);

const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");
const deleteButton = document.querySelectorAll("ul a");

const inputLength = () => input.value.length;

const removeItem = (event) => {
  event.target.parentNode.remove();
};

for (let buttons of deleteButton) {
  buttons.addEventListener("click", removeItem);
}

const newTask = () => {
  let v = input.value;
  let li = document.createElement("li");
  li.innerHTML =
    "<label><input type='checkbox'><i></i><span>" +
    v +
    "</span><a href='#'>–</a></label>";
  ul.appendChild(li);
  input.value = "";
  let button = document.querySelectorAll("ul a");
  let removeli = (event) => {
    event.target.parentNode.remove();
  };
  for (let one of button) {
    one.addEventListener("click", removeli);
  }
};

const addTaskEnter = (e) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    newTask();
  }
};

input.addEventListener("keypress", addTaskEnter);
