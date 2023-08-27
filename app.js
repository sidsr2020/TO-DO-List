document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const dueDate = document.getElementById("dueDate");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const taskDueDate = dueDate.value;
        if (!taskText) return;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="due-date">Due: ${taskDueDate}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = "";
        dueDate.value = "";

        listItem.querySelector(".complete-btn").addEventListener("click", toggleTaskComplete);
        listItem.querySelector(".delete-btn").addEventListener("click", deleteTask);
    }

    function toggleTaskComplete() {
        this.parentElement.classList.toggle("completed");
    }

    function deleteTask() {
        this.parentElement.remove();
    }
});