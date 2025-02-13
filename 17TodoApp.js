let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage()
{
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList===null){
        return [];
    }
    else{
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();

saveTodoButton.onclick = function()
{
    localStorage.setItem("todoList",JSON.stringify(todoList));
}


function onAddTodo(){
   let todosCount = todoList.length;
   todosCount += 1;

   let userInputElement = document.getElementById("todoUserInput");
   let userInputValue = userInputElement.value;
   if (userInputValue==="")
   {
    alert("Please Enter Valid Text..!");
    return ;
   }

   let newTodo = {
        text:userInputValue,
        uniqueNo:todosCount
   };
   todoList.push(newTodo);
   createAndAppendTodo(newTodo);
   userInputElement.value = "";
}
addTodoButton.onclick = function(){
    onAddTodo();
}

function onTodoStatusChange(checkboxId,labelId)
{
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    // if(checkboxElement.checked===true)
    // {
    //   labelElement.classList.add("checked");
    // }
    // else{
    //     labelElement.classList.remove("checked");
    // }
     labelElement.classList.toggle("checked")
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo){

    let checkboxId = "checkbox"+todo.uniqueNo;
    let labelId = "label"+todo.uniqueNo;
    let todoId = "todo"+todo.uniqueNo;


let todoElement = document.createElement("li");
todoElement.classList.add("todo-item-container","d-flex","flex-row");
todoElement.id = todoId;
todoItemsContainer.appendChild(todoElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = checkboxId;
inputElement.classList.add("checkbox-input");
inputElement.onclick = function(){
    onTodoStatusChange(checkboxId,labelId);
}
todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);    

    let labelElement = document.createElement("label");
    labelElement.classList.add("checkbox-label");
    labelElement.id = labelId;
    labelElement.setAttribute("for",checkboxId);
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

let deleteIconContainer = document.createElement("div");
deleteIconContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteIconContainer);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
deleteIcon.onclick = function(){
    onDeleteTodo(todoId);
}
deleteIconContainer.appendChild(deleteIcon);
}

for(let eachToDo of todoList){
    createAndAppendTodo(eachToDo);
    }