
var buttonEl = document.querySelector("#save-task");

var tasksToDoEl = document.querySelector("#task-to-do");
// console.log(tasksToDoEl);
// //Dynamic element creation
// var taskitemEl = document.createElement("li");
// //Dynamic text content 
// taskitemEl.textContent = "hello";
// //Dynamic adds a child to a parent (like putting interirior into a car)
// tasksToDoEl.appendChild(taskitemEl);
// //dynamic styling
// taskitemEl.className ="task-item";

//Created function to be excuted in the eventlistener parameter, must come before the event listener
var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
}
//Event listenert that will trigger the function upon click because the functions callback is in the syntax 
buttonEl.addEventListener("click", createTaskHandler);