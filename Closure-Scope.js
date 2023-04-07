function outer() {
    let a = "string1"
    let b = {car: "ford"}

    function inner(a , b) {
        a = "string2"
        b = {lastName: "ford2"}
        console.log(a)
        console.log(b)
    }
    inner(a,b);
    console.log(a)
    console.log(b)
}
outer();