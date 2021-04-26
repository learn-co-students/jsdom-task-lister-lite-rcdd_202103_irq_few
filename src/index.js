const form = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');
const submit = document.getElementById('btn');
const ul = document.getElementById('tasks');

function add(){
  event.preventDefault();
  const li = document.createElement("li");
  ul.append(li);

  li.innerText="X";
  li.style.border = "1px solid black";
  li.style.margin='5px';
  li.marginLeft = "1px";
}
form.addEventListener("click",add);
