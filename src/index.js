// document.addEventListener("DOMContentLoaded", () => {
//   // your code here

// });
const inputfield = document.getElementById("new-task-description");
const submit =document.getElementById("btn");

submit.addEventListener("submit",form);
function form(){
const ul= document.getElementById("tasks");
const li = document.createElement("li");
ul.append(li);

const form2= document.createElement("form");
const button =document.createElement("button");
button.innerHTML("X");
form2.append(button);

 li.append(form2);

}