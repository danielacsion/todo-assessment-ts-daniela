import "./styles.css";

// initial todos
// DO NOT EDIT THIS ARRAY
// You may add props to objects if needed.
let todos = [
  {
    todoID: 0,
    todoText: "Finish Homework",
    todoComplete: false,
  },
  {
    todoID: 1,
    todoText: "Walk the dog",
    todoComplete: true,
  },
  {
    todoID: 2,
    todoText: "Clean my room",
    todoComplete: false,
  },
];

//add todos via the Enter new task button
const plusButton = document.querySelector(".inputField button")!;
plusButton.addEventListener("click", () => {
  const inputContent = document.querySelector("input")!;
  const theNewTodo = inputContent.value;
  const newID = todos.length > 0 ? todos[todos.length - 1].todoID + 1 : 0;
  const newTodo = {
    todoID: newID,
    todoText: theNewTodo,
    todoComplete: false,
  };
  todos.push(newTodo);

  const todoList = document.querySelector(".todoList")!;
  const newItem = document.createElement("li");
  newItem.textContent = newTodo.todoText;
  todoList.appendChild(newItem);

  //add todos via the Enter Key
  inputContent.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const theNewTodo = inputContent.value;
      if (theNewTodo === "") return;

      const newID = todos.length > 0 ? todos[todos.length - 1].todoID + 1 : 0;
      const newTodo = {
        todoID: newID,
        todoText: theNewTodo,
        todoComplete: false,
      };

      todos.push(newTodo);

      const newItem = document.createElement("li");
      newItem.textContent = newTodo.todoText;
      todoList.appendChild(newItem);

      inputContent.value = "";
    }
  });
});
console.log(plusButton);

//Complete todoComplete
const todoList = document.querySelector(".todoList")!;
todoList.addEventListener("click", (event) => {
  const clickedItem = event.target;
});
