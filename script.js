const input = document.querySelector('#todo');
const todoContainer = document.querySelector('.todo-container');
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('taskForm');


todoContainer.addEventListener('submit',function(e) {
    e.preventDefault();
    if (input.value !== ''){
    const li = document.createElement('li');
    let completeBtn = document.createElement("button");
    let removeBtn = document.createElement('button');

    removeBtn.innerText = 'Remove';
    removeBtn.className = 'remove-bttn';
    completeBtn.innerText = "Done";
    completeBtn.className = 'done-bttn';
    
    li.innerText = input.value;
    li.value = "";
    
    todoContainer.appendChild(li);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    
    localStorage.setItem('todoAdded', input.value); 
    }
    input.value = '';
});


todoList.addEventListener("click", function(event) {
    const targetClass = event.target.className;
    if (targetClass === "done-bttn") {
      event.target.style.textDecoration = "line-through";
    } else if (targetClass === "remove-bttn") {
      event.target.parentNode.remove();
    }
  });