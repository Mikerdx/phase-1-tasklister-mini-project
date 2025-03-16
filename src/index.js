document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const inputField = document.getElementById("new-task-description");
        const taskText = inputField.value.trim();

        if (!taskText) return; 

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => li.remove());

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        inputField.value = ""; 
    });
});