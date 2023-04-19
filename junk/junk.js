const users = [
    {name: 'Alberta Johnson', isActive: true, age: 33},
    {name: 'Darnell Thompson', isActive: false, age: 25},
    {name: 'Sally Seashell', isActive: false, age: 41},
    {name: 'Inija Rosas', isActive: true, age: 56},
  ];
  
  const returnNameAndAge = users.map(user => user.name + " is " + user.age + 'years old.');
  
  console.log(returnNameAndAge);
// ----------------------------------NEW---------------------
  const a = document.querySelector('a');

//Get an attribute
a.href; //"http://google.com"
console.log(a.href);
//Set an attribute
a.name = 'new link name';
console.log(a.name);
//Add a new attribute
a.target = "_blank";
console.log(a.target);
// -----------new---------
const newLI = document.createElement('li');
newLI.innerHTML = "Item 2";

const list = document.querySelector('ul');
list.appendChild(newLI); //Insert after item 1