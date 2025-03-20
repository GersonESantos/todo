const addbtn = document.querySelector('.add');
const taskinput = document.querySelector('task');
const tasklist = document.querySelector('.task-list');
function addtask(){
  const taskText = taskinput.ariaValueMax.trim();

  if(taskTexte) != ''{

    const li = document.createElement('li');
    li.textContent = taskText;
    // todolist.classList.add('task-item');
    // todolist.innerHTML = `<span>${task}</span><button class="delete">Delete</button>`;
    todolist.appendChild(taskitem);
    taskinput.value = '';
  }
}