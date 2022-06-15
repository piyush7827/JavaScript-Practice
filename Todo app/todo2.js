let taskCount = 0;

function saveTask() {
  let task = document.getElementById("task").value;

  if (!task) {
    return;
  }
  taskCount++;
  document.getElementById("task").value = "";
  addTask(task, taskCount);
}

function addTask(task, count) {
  let li = document.createElement("li");
  li.setAttribute("id", count);

  let spanEl = document.createElement("span");
  spanEl.innerText = task;

  let btn = document.createElement("button");
  btn.innerText = "DONE";
  btn.addEventListener("click", function deleteTask() {
    document.getElementById(count).remove();
  });

  li.appendChild(spanEl);
  li.appendChild(btn);

  document.getElementById("todo-list").appendChild(li);
}
