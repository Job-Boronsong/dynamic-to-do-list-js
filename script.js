// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            // Alert the user to enter a task if input is empty
            alert("Please enter a task!");
            return;
        }

        // Task Creation and Removal
        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        
        // Use classList.add to add the class name
        removeButton.classList.add('remove-btn');

        // Assign onclick event to remove button
        removeButton.onclick = function() {
            // Remove the li element from taskList when clicked
            taskList.removeChild(li);
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);

        // Append the li to taskList
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
    }

    // Attach Event Listeners
    // Add event listener to addButton for click events
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for keypress events
    taskInput.addEventListener('keypress', function(event) {
        // Check if Enter key was pressed
        if (event.key === 'Enter') {
            // Call addTask when Enter is pressed
            addTask();
        }
    });
});