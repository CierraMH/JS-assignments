function outer() {
    let a = "string1"
    let b = {firstName: "fork"}

    function inner(a , b) {
        a = "string2"
        b = {lastName: "ford"}
        console.log(a)
        console.log(b)
    }
    inner(a,b);
    console.log(a)
    console.log(b)
}
outer();