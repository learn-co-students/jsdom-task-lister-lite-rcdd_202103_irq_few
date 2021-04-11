document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  const tasks = document.querySelector('#tasks');
  
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    tasks.append(li);
  })
});
