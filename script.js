Here's the JavaScript code (`script.js`) based on your requirements:

```javascript
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
        removeButton.className = 'remove-btn';

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
```

### Key Features of the Code:

1. **DOMContentLoaded Event**: Ensures all code runs after the HTML document is fully loaded.

2. **DOM Element Selection**: Uses `document.getElementById()` to select the button, input field, and task list.

3. **addTask Function**:
   - Retrieves and trims the input value
   - Validates that the input is not empty
   - Creates a new list item with the task text
   - Creates a remove button with proper styling class
   - Attaches a click handler to remove the task
   - Appends everything to the task list
   - Clears the input field

4. **Event Listeners**:
   - Click event on the "Add Task" button
   - Keypress event on the input field to detect Enter key

5. **Comments**: Included throughout to explain each major step.

The application allows users to:
- Add tasks by clicking the "Add Task" button
- Add tasks by pressing Enter in the input field
- Remove individual tasks by clicking their "Remove" button
- Get prompted if they try to add an empty task