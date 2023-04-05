let getFirstValue = [1, 3, 5, 7, 9];
let incrementItems = getFirstValue.map(newValue)
// function incrementItems(x) {
//     return x + 1 ;
// }
function newValue(x){
    return x +1;
}
// let newValue = incrementItems(getFirstValue)
incrementItems.reverse();
console.log(getFirstValue[0]);
console.log(incrementItems);