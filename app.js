// app.js

function createList() {
    var newListName = document.getElementById("new-list-input").value;
    var newList = document.createElement("li");
    newList.innerText = newListName;
    document.getElementById("todo-list").appendChild(newList);
}

function addItem() {
    var newItemName = document.getElementById("new-item-input").value;
    var newItem = document.createElement("li");
    newItem.innerText = newItemName;
    document.getElementById("todo-list").appendChild(newItem);
    document.getElementById("new-item-input").value = "";
}