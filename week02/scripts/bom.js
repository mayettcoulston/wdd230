//declared three const variables that hold references to the input, button, and .list.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// click event listener for the Add Chapter button
button.addEventListener('click', function() {
    // Check if input is not blank
    if (chapterInput.value === "") {
        alert("Please enter a chapter name.");
        chapterInput.focus();
        return;
    }

    // create a li element
    const li = document.createElement("li");

    // Create delete button
    const deleteButton = document.createElement("button");

    // Populate elements
    li.textContent = chapterInput.value;
    deleteButton.textContent = "❌";

    // Append button to Li
    li.append(deleteButton);

    // Append li to the unordered list
    list.append(li);

    // Add event listener to delete button
    deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    })
    
    // Send focus back to input
    input.focus();
    input.value = '';
});
