document.addEventListener("DOMContentLoaded", () => {
  // your code here

const creatTask = document.getElementById("create-task-form");
const creatTaskDescription = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");

creatTask.addEventListener("submit", createNewTask);

function createNewTask(event) {
    console.log (event)
    event.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerText = creatTaskDescription.value;
    taskList.appendChild(newTask);
    event.target.reset();
  };
  
});
