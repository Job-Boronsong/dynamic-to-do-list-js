// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        // Get tasks from Local Storage or initialize empty array if none exist
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Create task elements for each stored task
        storedTasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    // Function to save tasks to Local Storage
    function saveTasksToStorage() {
        // Get all current tasks from the DOM
        const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
        // Save to Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to create task element
    function createTaskElement(taskText) {
        // Create new list item
        const li = document.createElement('li');
        
        // Create text node for task
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add click event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
            // Update Local Storage after removal
            saveTasksToStorage();
        };

        // Append remove button to list item
        li.appendChild(removeButton);
        
        // Append list item to task list
        taskList.appendChild(li);
    }

    // Function to add new task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create task element
        createTaskElement(taskText);

        // Save updated tasks to Local Storage
        saveTasksToStorage();

        // Clear input field
        taskInput.value = "";
    }

    // Event Listeners
    // Add task button click
    addButton.addEventListener('click', addTask);

    // Enter key press in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when page loads
    loadTasks();
});