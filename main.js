const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");



const createTodo = () => {
  if (!input.value.trim()) return alert("напиши что нибудь");

  const div = document.createElement("div");
  const text = document.createElement("h3");
  const delBtn = document.createElement("button")
  const createBtn = document.createElement("button")

  delBtn.setAttribute("class" , "delBtn")
  div.setAttribute("class", "block_text");
  createBtn.setAttribute("class" , "createBtn")
  delBtn.innerHTML = "delete"
  createBtn.innerHTML= "edit"
  text.innerHTML = input.value;
  div.append(delBtn)
  div.append(createBtn)
  div.append(text);
  todoList.append(div);

  createBtn.onclick=()=>{
    let edited = prompt("change to :")
    text.innerHTML= edited
  }
  delBtn.onclick=()=>{
    div.remove()
  }

  input.value = "";
};

createButton.onclick = () => createTodo();

// createButton.addEventListener("click", createTodo);

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") createTodo();
// });

input.onkeydown = (e) => {
  if (e.key === "Enter") createTodo();
};
