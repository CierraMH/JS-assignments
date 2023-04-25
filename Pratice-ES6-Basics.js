let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let numbers = [...numbers1, ...numbers2]
const square = (number) => {return number*number };
const squares = numbers.map(square);
const isEven = (number) => {return number % 2 === 0}
// console.log(isEven(1));
const evenSquares = squares.filter(isEven)
// console.log(evenSquares);
// console.log(numbers);
const [firstEvenSqaure, secondEvenSqaure] = evenSquares;
console.log(`${numbers} / ${squares} / ${evenSquares} / ${firstEvenSqaure} , ${secondEvenSqaure}.`)