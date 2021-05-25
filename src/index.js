document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form");
  let input = document.querySelector("#new-task-description");
  let ul = document.querySelector("#tasks");
  
  let select = document.createElement("select");
  select.innerText="priority";
  let option1 = document.createElement("option");
  option1.innerText="high";
  let option2 = document.createElement("option");
  option2.innerText="medium";
  let option3 = document.createElement("option");
  option3.innerText="low";
  form.append(select);
  select.append(option1);
  select.append(option2);
  select.append(option3);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.innerText="x";
    li.innerText = input.value;
     if(select.value == "high")
    {
     li.style.color="red"; 
    }else if(select.value == "medium")
    {
      li.style.color="yellow";
    }else{
      li.style.color="green";
    }
    btn.addEventListener("click", function(){
      li.remove();
    });
    li.append(btn);
    ul.append(li);
    input.value="";
  });
});
 