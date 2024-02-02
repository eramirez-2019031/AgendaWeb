let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span><strong>(${task.priority})</strong></span> <span id="taskName_${index}" contenteditable="true">${task.name}</span> 
                <a href="javascript:void(0);" onclick="openEditForm(${index})"><img class="edit-button" src="../media/editar.png" alt="Editar"></a>
                <img class="delete-button" onclick="deleteTask(${index})" src="../media/borrar.png" alt="Eliminar">`;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();
  const taskPriority = prompt("Ingresar la prioridad de su tarea");

  if (taskName !== '') {
    tasks.push({ name: taskName, priority: taskPriority });
    renderTasks();
    taskInput.value = '';
  } else {
    alert('La tarea es inválida, ingrese una nueva');
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function openEditForm(index) {
  const newName = prompt("¿Cuál es el nuevo nombre de su tarea?");
  const newPriority = prompt("Ingresar la nueva prioridad de su tarea");

  if (newName !== null && newPriority !== null) {
    tasks[index].name = newName.trim();
    tasks[index].priority = newPriority.trim();
    renderTasks();
  }
}

window.onload = function () {
  renderTasks();
};
