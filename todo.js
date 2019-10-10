var listElement = document.querySelector("#app ul");
var textElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todo")) || [] ;

// Add Item
function AddItem(text){
    // Create Item
    var itemElement = document.createElement("li");

    // Create link item
    var itemExcludeTextElement = document.createTextNode("Excluir");
    var linkExcludeElement = document.createElement("a");
    linkExcludeElement.setAttribute("href", "#");
    // Array text position
    var itemposition = todos.indexOf(text);
    linkExcludeElement.setAttribute("onClick", "RemoveItem(" + itemposition + ")");
    linkExcludeElement.appendChild(itemExcludeTextElement);

    var itemTextElement = document.createTextNode(text);
    itemElement.appendChild(itemTextElement);
    listElement.appendChild(itemElement);
    listElement.append(linkExcludeElement);
}

// Initial state
function RenderList() {
    for (let index = 0; index < todos.length; index++) {
        const element = todos[index];
        AddItem(element);   
    }    
}


// includding Item
function AddNewItem() {
    var text = textElement.value;
    if (text.length > 0) {
        AddItem(text);
        UpdateTodoList(text);
    }
    
}

// Remove Item
function RemoveItem(pos) {
    todos.splice(pos, 1)
    listElement.innerHTML = "";
    RenderList();
    updateStorage();
}

// Update ToDo List
function UpdateTodoList(text) {
    todos.push(text);
    updateStorage();
}

function updateStorage() {
    localStorage.setItem("list_todo", JSON.stringify(todos));
}

buttonElement.setAttribute("onClick", "AddNewItem()");

RenderList();


