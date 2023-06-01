const taskInput = document.querySelector(".taskInput");
const taskBtn = document.querySelector(".taskBtn");
const tskContainer = document.querySelector(".tskContainer");

taskBtn.addEventListener("click", function () {
  if (taskInput.value.trim() != 0) {
    let newTask = document.createElement("div");
    var x = document.createElement("INPUT");
    x.classList.add("tskdpl");
    x.setAttribute("type", "text");
    x.setAttribute("value", taskInput.value);
    x.readOnly = true;
    newTask.classList.add("tasks");

    tskContainer.appendChild(newTask);
    newTask.innerHTML += `<i class="fa-regular fa-square"></i>`;
    newTask.appendChild(x);
    newTask.innerHTML += `
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-xmark"></i>
    `;
    taskInput.value = null;
  } else {
    alert("Please Enter Task");
  }
});

tskContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("fa-pen-to-square")) {
    var a = e.target.parentElement.firstChild.nextSibling;
    a.readOnly = false;
    e.target.classList = "fa-solid fa-circle-check";
    console.log(a.nextSibling);
  } else if (e.target.classList.contains("fa-circle-check")) {
    var a = e.target.parentElement.firstChild.nextSibling;
    a.readOnly = true;
    e.target.classList = "fa-sharp fa-solid fa-pen-to-square";
  } else if (e.target.classList.contains("fa-square")) {
    e.target.classList = "fa-solid fa-square-check";
    // console.log(e.target.classList);
  } else if (e.target.classList.contains("fa-solid")) {
    e.target.classList = "fa-regular fa-square";
  }
});
