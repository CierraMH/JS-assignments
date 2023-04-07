let recursion = function(b, e) {
    if (e === 0){
        return 1;
    } else {
        return b * recursion(b, e-1);
    }
    // console.log(2,5)
    // return recursion(x**y)
    // recursion(2,5);
};
console.log(recursion(9,4));
