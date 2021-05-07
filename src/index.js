document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("create-task-form");
const item = document.getElementById("new-task-description");
const list = document.getElementById("tasks");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.innerHTML = item.value;
  list.append(newItem);
})
});
