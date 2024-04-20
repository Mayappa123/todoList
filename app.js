document.addEventListener("DOMContentLoaded", function () {
  // here Creating the elements
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");
  const totalTasks = document.getElementById("total-tasks");

  //Add eventLister
  addBtn.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      addTodoItem(todoText);
      todoInput.value = "";
      updateTotalTasks();
    }
  });

  // function addTodoItem
  function addTodoItem(todoText) {
    const li = document.createElement("li");
    const checkbox = document.createElement("span");
    checkbox.classList.add("checkbox");
    const todoItem = document.createElement("span");
    todoItem.textContent = todoText;
    // here Append elements
    li.appendChild(checkbox);
    li.appendChild(todoItem);
    todoList.appendChild(li);

    checkbox.addEventListener("click", function () {
      if (li.classList.contains("checked")) {
        li.classList.remove("checked");
      } else {
        li.classList.add("checked");
      }
    });

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "\u00D7";
    deleteBtn.classList.add("delete-button");
    // here Append elements
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      li.remove();
      updateTotalTasks();
    });
  }

  // function updateTotalTasks
  function updateTotalTasks() {
    totalTasks.textContent = todoList.children.length;
  }
});
