// app.js

function addItem() {
    var newItemName = document.getElementById("new-item-input").value;
    var newItem = document.createElement("li");
    newItem.innerText = newItemName;

    // Add a delete button to each item
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "done";
    deleteButton.onclick = function() {
        deleteItem(this);
    };
    newItem.appendChild(deleteButton);


    document.getElementById("todo-list").appendChild(newItem);
    document.getElementById("new-item-input").value = "";
}

function deleteItem(item) {
    var listItem = item.parentElement;
    listItem.remove();
}