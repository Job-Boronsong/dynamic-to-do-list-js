document.addEventListener('DOMContentLoaded', () => {
    /* ---------- DOM references ---------- */
    const addButton  = document.getElementById('add-task-btn');
    const taskInput  = document.getElementById('task-input');
    const taskList   = document.getElementById('task-list');

    /* ---------- addTask: create & insert a new <li> ---------- */
    function addTask () {
        // Trim whitespace from both ends of the input
        const taskText = taskInput.value.trim();

        // If the input is empty, ask the user to type something
        if (taskText === '') {
            alert('Please enter a task before adding.');
            return;                                     // Stop here
        }

        /* ----- build the list item ----- */
        const li = document.createElement('li');
        li.textContent = taskText;

        /* --- build its “Remove” button --- */
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className   = 'remove-btn';

        // When clicked, delete the parent <li>
        removeBtn.onclick = () => taskList.removeChild(li);

        // Assemble & insert into the DOM
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input so user can type a new task immediately
        taskInput.value = '';
    }

    /* ---------- Event listeners ---------- */
    addButton.addEventListener('click', addTask);

    // Allow “Enter” key inside the input to add tasks
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    /* ---------- Optional: run once on load (does nothing if input is empty) ---------- */
    addTask();
});