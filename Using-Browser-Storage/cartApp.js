initializeCart = () => { if (! localStorage.getItem("fromCart")) { localStorage.setItem("fromCart", JSON.stringify([])); } }

function addItem(itemObjects) {
    let cart = JSON.parse(localStorage.getItem("fromCart"));
    itemObjects.id = Math.floor(Math.random()*16819250000); //generates random numbers for the "id"
    cart.push(itemObjects);
    localStorage.setItem("fromCart", JSON.stringify(cart));
};
function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem("fromCart"));
    cart.pop(itemId);
    localStorage.setItem("fromCart", JSON.stringify(cart));
};
displayCart = () => { let cart = JSON.parse(localStorage.getItem("fromCart"));
    console.log(cart); 
};
initializeCart();

const addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", function(event){
    event.preventDefault();
    const data = new FormData(event.target);
    // console.log(data.get("itemName"));
    // console.log(data.get("itemPrice"));
    addItem({name:data.get("itemName"), Price:data.get("itemPrice")})
})
// preformming an action with a button click!
document.getElementById("displayCartButton").onclick = (event) => { 
displayCart()
};
