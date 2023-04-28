"use strict";
//how to change a nodeList to an array(line2)
const li = [...document.querySelectorAll('li')];
// console.log(li[1].innerHTML); //shows Apples (before the text change)
li[1].innerHTML = "Granny Smith Apples";
// console.log(li[1].innerHTML);
console.log(li);
document.querySelector('.oatM').remove();
const newLi = document.createElement('li');
newLi.innerHTML = "Kombucha";
const addedList = document.querySelector('ul');
addedList.appendChild(newLi);
const newValues = ['protein bar, almonds, peanut butter'];
const list = document.getElementById("list");
// const list = document.querySelector('#list');
list.innerHTML = "";
const items = ["protein bars", "almonds", "peanut butter"];
items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});
list.children[1].classList.add("important");
