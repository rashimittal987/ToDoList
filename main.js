const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const tasklist = document.getElementById('#task-list');

addBtn.addEventListener('click', (e) => {
    if (taskInput.value !== "") {
        const taskText = taskInput.value;
        const listitem = document.createElement("li");
        listitem.innerHTML = `
                            ${taskText}
                            <button class="delete-btn">Delete</button>
                            `;
        tasklist.appendChild(listitem);
        taskInput.value = "";
    }
});

tasklist.addEventListener('click', (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        tasklist.removeChild(listItem);
    }
})