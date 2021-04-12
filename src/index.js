document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form=document.getElementById('create-task-form');
  const input=document.getElementById('new-task-description');
  const tasks=document.getElementById('tasks');

  
  const handleDelete=()=>{
    const buttons=document.getElementsByTagName('button');
    for(i=0;i<buttons.length;i++){
        const key=buttons[i].id.slice(9);
      buttons[i].onclick=(e)=>{
        e.preventDefault();
        document.getElementById(`todo${key}`).remove()
      }
    }
  }
  
  let key=0;
  form.onsubmit=(e)=>{
    e.preventDefault();
    tasks.innerHTML += `<li id=todo${key}>`+`<span>${input.value}</span><button id='deleteBtn${key}'>X</button></li>`;
    handleDelete();
    key++;
  };
});

