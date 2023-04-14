const users = [
    {name: 'Alberta Johnson', isActive: true, age: 33},
    {name: 'Darnell Thompson', isActive: false, age: 25},
    {name: 'Sally Seashell', isActive: false, age: 41},
    {name: 'Inija Rosas', isActive: true, age: 56},
  ];
  
  const returnNameAndAge = users.map(user => user.name + " is " + user.age + 'years old.');
  
  console.log(returnNameAndAge);