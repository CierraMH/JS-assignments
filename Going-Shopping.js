
let GroceryListArray = ["Pop Tarts", "Ramen noodles", "Chips", "Salsa", "Coffee"];
GroceryListArray.push("Fruit Loops");
GroceryListArray[4] = "Fair Trade Coffee";
GroceryListArray.splice(2,2, "Rice", "Beans");
let ShoppingCartArray = [];
GroceryListArray.pop();
ShoppingCartArray.push("Fruit Loops");
GroceryListArray.shift();
ShoppingCartArray.unshift("Pop Tarts");
let i = 0
let size = GroceryListArray.length
while (i < size ) { 
    i++
   let b = GroceryListArray.pop()
   ShoppingCartArray.push(b)
}

ShoppingCartArray.sort();
ShoppingCartArray.reverse();

console.log(GroceryListArray);
console.log(ShoppingCartArray.join(", "));