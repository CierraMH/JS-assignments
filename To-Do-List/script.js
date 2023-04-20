const li = document.querySelectorAll("li");
console.log(li);
const myToDoList = document.getElementById("myToDoList");
const button0 = document.getElementsByClassName("button0");
const add = document.getElementById("add");
let text = add.value;
add.value = "";
function newListItems() {
  if (text !== "") {
    const newList = document.createElement("li");
    newList.innerHTML = text;
    const addedList = document.querySelector("ul");
    newList.addEventListener("click", function () {
      myToDoList.removeChild(newList);
    });
    addedList.appendChild(newList);
  }
}

console.log(text);
console.log(newListItems());
// button0.addEventListener("click", newListItems("li"));
//crossout items
function crossOutItems(myToDoList) {
  const item = myToDoList;
  item.style.textDecoration = "line-through";
}
document.getElementById("listArray0").addEventListener("click", function (event) {
  crossOutItems(event.target);
});
