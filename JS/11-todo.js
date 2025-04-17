let todoList = JSON.parse(localStorage.getItem('todoList'));
if(!todoList || todoList.length === 0){
    todoList = [
        {
            name : 'shlesh birthday',
            dueDate : '2025-05-06'
        }
    ];
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
displayTodoList();
function displayTodoList(){
    let todoListHTML = '';
    let temp='';
    for(let i=0;i<todoList.length;i++){
        const { name, dueDate } = todoList[i];
        temp = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick="
                todoList.splice(${i},1);
                displayTodoList();
                localStorage.setItem('todoList', JSON.stringify(todoList));
            ">Delete</button>
        `;
        todoListHTML+=temp;
    }
    document.querySelector('.todos').innerHTML=todoListHTML;
}
function addTodo(){
    const taskName = document.querySelector('.inputTask');
    // console.log(taskName.value);
    const name = taskName.value;
    const dateInput = document.querySelector('.js-due-date');
    const dueDate=dateInput.value;
    todoList.push({
        name,
        dueDate
    });
    localStorage.setItem('todoList', JSON.stringify(todoList));
    // console.log(todoList);
    taskName.value="";
    dateInput.value="";
    displayTodoList();
}