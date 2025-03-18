let toDoList = [
    
  ];
  
  // Function to render the to-do list
  function renderToDo() {
    let toDoListHtml = "";
    for (let i = 0; i < toDoList.length; i++) {
      const todoObject = toDoList[i];
      const { name, dueDate } = todoObject;
      const html = `<p>
          ${name} ${dueDate} 
          <button class = "js-delete-button">Delete</button>
          </p>`;
      toDoListHtml += html;
    }
      document.querySelector(".js-html-button").innerHTML = toDoListHtml;
      document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
          deleteButton.addEventListener('click', () => {
              toDoList.splice(index, 1)
              deleteToDo()
              renderToDo()
          })
          
      })

}
document.querySelector('.js-addToDo-button').addEventListener('click', () => {
      addToDo()
  })
  
  // Function to add a new to-do
  function addToDo() {
    const inputElement = document.querySelector(".js-name-input");
    const dateInputElement = document.querySelector(".js-date");
  
    const name = inputElement.value;
    const dueDate = dateInputElement.value;
  
    // Add the new to-do item to the list
    toDoList.push({ name, dueDate });
  
    // Save the updated to-do list to localStorage
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  
    // Clear the input fields
    inputElement.value = "";
    dateInputElement.value = "";
  
    // Re-render the list
    renderToDo();
  }
  
  // Function to delete a to-do item
  function deleteToDo(index) {
    // Remove the to-do item from the list
    toDoList.splice(index, 1);
  
    // Update localStorage with the new to-do list
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  
    // Re-render the list
    renderToDo();
  }
  
  // Function to load the to-do list from localStorage on page load
  function loadToDoList() {
    const storedToDoList = localStorage.getItem("toDoList");
    if (storedToDoList) {
      toDoList = JSON.parse(storedToDoList); // Parse the JSON string into an array
      renderToDo(); // Render the list from localStorage
    }
  }
  
  // Call loadToDoList() on page load to restore the list
  window.onload = loadToDoList;
  