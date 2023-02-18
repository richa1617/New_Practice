//A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

function outer() {
    let a = 0
    function inner() {
       return a+=10
    }
    return inner
}

let result = outer()
console.log(result()) // 10
console.log(result()) //20
console.log(result()) //30
//Multiple closure instances don’t share the same persistent memory.
let other = outer()
console.log(other()) //10 //20