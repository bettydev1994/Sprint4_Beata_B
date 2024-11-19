const taskContainer = document.getElementById("task container");
const taskInput = document.getElementById("taskInput");
const buttonAddTask = document.getElementById("buttonAddTask");
const taskList = document.getElementById("taskList");

function addTaskToTheList() {
  taskText = taskInput.value;
  if (taskText !== "") {
    const listItem = document.createElement("li");

    const task = document.createElement("span");
    task.textContent = taskText;

    const inputField = document.createElement("input");
    inputField.textContent = taskText;
    inputField.style.display = "none";

    const editButton = document.createElement("button");
    editButton.textContent = "Edytuj";
    editButton.onclick = function () {
      editTask(task, editButton, inputField, confirmButton);
    };

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Zatwierdź zadanie";
    confirmButton.onclick = function () {
      task.textContent = inputField.value;
      task.style.display = "inline";
      editButton.style.display = "inline";
      confirmButton.style.display = "none";
      inputField.style.display = "none";
    };
    confirmButton.style.display = "none";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";
    deleteButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    listItem.append(task, inputField, editButton, confirmButton, deleteButton);
    taskList.prepend(listItem);
  } else alert("Nazwa zadania nie może być pusta.");
}

buttonAddTask.onclick = addTaskToTheList;

function editTask(textField, editButton, inputField, confirmButton) {
  textField.style.display = "none";
  editButton.style.display = "none";
  confirmButton.style.display = "inline";
  inputField.style.display = "inline";
  inputField.value = textField.textContent;
}
