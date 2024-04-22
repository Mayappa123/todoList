document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");
  const totalTasks = document.getElementById("total-tasks");

  function disableAddButton() {
    addButton.disabled = true;
  }
  disableAddButton();

  inputField.addEventListener("input", function () {
    addButton.disabled = inputField.value.trim() === "";
  });

  addButton.addEventListener("click", function () {
    const text = inputField.value.trim();
    if (text !== "") {
      createTodoItem(text);
      inputField.value = "";
      addButton.disabled = true;
    }
  });

  function createTodoItem(text) {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const todoText = document.createElement("div");
    todoText.textContent = text;
    todoText.classList.add("todo-text");
    li.appendChild(todoText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
      li.remove();
      updateTotalTasks();
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
    updateTotalTasks();
  }

  function updateTotalTasks() {
    totalTasks.textContent = todoList.children.length;
  }

  addButton.addEventListener("click", function () {
    const text = inputField.value.trim();
    if (text !== "") {
      createTodoItem(text);
      inputField.value = "";
      addButton.disabled = true;
    } else {
      showError("Todo should not be empty.");
    }
  });

 
});
