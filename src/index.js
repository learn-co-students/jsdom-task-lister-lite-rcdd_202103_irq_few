document.addEventListener("DOMContentLoaded", () => {
  
  const new_Form = document.getElementById("create-task-form");
  const new_Description = document.getElementById("new-task-description");
  const new_Priority = document.getElementById("new-task-priority");

  
 const ul = document.getElementById("tasks");

  new_Form.addEventListener("submit", createTask)
});

