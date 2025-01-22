const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('.list');

buttonElement.addEventListener('click', () => {
    // Get the input value
    const inputValue = inputElement.value.trim();
  
    // Check if the input is not empty
    if (inputValue !== '') {
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = inputValue;
  
      // Create a delete button for the list item
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.setAttribute('aria-label', `Delete ${inputValue}`);
      
      // Add a click event to remove the list item
      deleteButton.addEventListener('click', () => {
        listElement.removeChild(listItem);
      });
  
      // Append the delete button to the list item
      listItem.appendChild(deleteButton);
  
      // Add the list item to the list
      listElement.appendChild(listItem);
  
      // Clear the input field
      inputElement.value = '';
      inputElement.focus();
    } else {
      alert('Please enter a chapter name.');
    }
  });