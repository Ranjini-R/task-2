function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(listItem);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  function deleteTask(button) {
    const taskList = document.getElementById('taskList');
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
  }
  