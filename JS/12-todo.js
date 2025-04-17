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
    todoList.forEach((todoObject,index) => {
        const { name, dueDate } = todoObject;
        temp = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        todoListHTML+=temp;
    });
    // for(let i=0;i<todoList.length;i++){
        
    // }
    document.querySelector('.todos').innerHTML=todoListHTML;
    document.querySelectorAll('.js-delete-todo-button').forEach ((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            todoList.splice(index,1);
            displayTodoList();
            localStorage.setItem('todoList',JSON.stringify(todoList));
        })
    })
}
document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
    addTodo();
})
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