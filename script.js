const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo(){
    const newTodoText = newTodoInput.value;
    newTodoInput.value = '';
    

    const listItem = document.createElement('li');
    const completeCheckBox = document.createElement('input');
    const TodoText = document.createElement('span');
    const deleteBtn = document.createElement('button');


    completeCheckBox.type = 'checkBox';

    listItem.appendChild(completeCheckBox);
    listItem.appendChild(TodoText);
    listItem.appendChild(deleteBtn);


    TodoText.textContent = newTodoText;
    deleteBtn.textContent = 'Delete';
    todoList.append(listItem);




    deleteBtn.addEventListener('click',function(){
        todoList.removeChild(listItem);
    })
    

}



addBtn.addEventListener('click', addTodo);