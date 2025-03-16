const toDoList = [
//   {
//     name: "make dinner",
//     dueDate: "2022-12-02",
//   },
//   {
//     name: "watch youtube",
//     dueDate: "2024-12-03",
//   },
];

function renderToDo() {
  let toDoListHtml = "";
  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];
    const { name, dueDate } = todoObject;
    const html = `<p>
        ${name} ${dueDate} 
        <button onclick = "
        toDoList.splice(${i}, 1);
        renderToDo()
        ">Delete</button>
        </p>`;
    toDoListHtml += html;
  }
  const htmlButton = (document.querySelector(".js-html-button").innerHTML =
    toDoListHtml);
}

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-date");
  const dueDate = dateInputElement.value;
  toDoList.push({ name, dueDate });
  inputElement.value = "";
  renderToDo();
}
