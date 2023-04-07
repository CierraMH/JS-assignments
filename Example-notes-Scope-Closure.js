let addNum = (x, y) => x 
console.log(addNum);

let n = 0;
let addOne = () => n++

if(true){
    let n = 0;
    console.log(n)
}
// ^if you console.log the n outside of the scope it will not work
// ^^ if you used var instead of let it would allow console.log to work outside the function
var message = "hello"
function sayHello(){
    console.log(message)
}
sayHello()
// ^^ This will work as the var message
const myCalculator = (num1, num2) => {
    let add = function(x, y){
        return x+y
    }
    let subtract = function(x, y){
        return x-y
    }

    if (num1 <= num2) {
        let z = 1
        return add(num1, num2)       
    } else {
        return subtract(num1, num2)
    }
}
console.log(myCalculator(2, 5)) //add
console.log(myCalculator(6,5)); //subtract

let count = 10
function countDown(count) {
    if (count <0) {
        return
    } else {
        console.log(count)
        count--
        countDown(count)
    }
}
countDown(10)
// console.log(countDown(10)) this would not work 
let x = 1;
let y = 2;
function addToX() {
    
}