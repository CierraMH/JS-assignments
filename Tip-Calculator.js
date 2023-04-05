
let billAmount = 200; // before tip
function calculateTip(x) {
    return x * .20;
}
let tipAmount = calculateTip(200);
function getBillAmount(x) {
    return x + calculateTip(x);
}
let totalBillAmount = getBillAmount(billAmount)

console.log(billAmount);
console.log(tipAmount);
console.log(totalBillAmount);

