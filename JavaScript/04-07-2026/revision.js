const todoElem = document.getElementById("todo");
const todoCountElem = document.getElementById("todoCount");

todoElem.addEventListener("input", e => {
    todoCountElem.innerText = e.target.value ? e.target.value.length : 0;
})

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
    const todo = todoElem.value;
    if (!todo) return;
    const todoList = document.getElementById("todoList");
    const li = document.createElement("li");
    li.innerText = todo;
    li.className = "todo-item";
    li.onclick = () => { // delete on click item
        li.remove();
    }
    todoList.appendChild(li);
    todoElem.value = "";
    todoCountElem.innerText = 0;
})

