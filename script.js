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
    removeBtn.setAttribute('id','remove-bttn');
    completeBtn.innerText = "Done";
    completeBtn.setAttribute('id','done-bttn');
    
    li.innerText = input.value;
    li.value = "";
    
    todoContainer.appendChild(li);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    
    localStorage.setItem('todoAdded', input.value); 
    }
    else if (input.value === ''){
        alert('Please enter a todo');
    }
    input.value = '';
});

document.addEventListener('click',function(e) {
    if (e.target.id === 'remove-bttn') {
        e.target.parentElement.remove();
    }
});

document.addEventListener('click',function(e) {
    if (e.target.id === 'done-bttn') {
        e.target.parentElement.style.textDecoration = 'line-through';
        e.target.parentElement.style.textDecorationColor = 'red';
    }
});