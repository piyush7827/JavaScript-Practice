let tasks = [];
let donetasks = [];

function saveTask() {
  let task = document.getElementById("task").value;

  if (!task) {
    return;
  }

  tasks.push(task);
  document.getElementById("task").value = "";
  renderTasks();
}

function renderTasks() {
  let el = "";
  for (let i = 0; i < tasks.length; i++) {
    el +=
      "<li><span>" +
      tasks[i] +
      "</span><button id= " +
      i +
      "  onclick= ontaskdelete(" +
      i +
      ")>Done</button></li>";
  }
  document.getElementById("todo-list").innerHTML = el;
}

function renderingdonetask(task) {
  let el = "<li>" + task + "</li>";

  document.getElementById("done-list").innerHTML += el;
}

function ontaskdelete(index) {
  donetasks.push(tasks[index]);
  renderingdonetask(tasks[index]);
  tasks.splice(index, 1);

  renderTasks();
}
