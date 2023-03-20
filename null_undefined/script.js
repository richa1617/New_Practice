//What is undefined? Undefined usually means variable has been declared, but not not assigned any value

let j;
console.log(j)  //undefined
 

let obj={
    name:"richa"

}
console.log(obj.age)  //undefined


//What is null? null is "a value that represents no value". null is value that ha been explicitly defined to a variable.


let value = null;
console.log(value); //null

console.log(typeof null )         // "object" 
console.log(typeof undefined)     // "undefined"
console.log(null === undefined )  // false
console.log(null  == undefined )  // true
console.log(null === null  )      // true
console.log(null == null )        // true
console.log(!null  )              // true


let a = 3 + null;
console.log(a);
// 3

let b = 3 + undefined;
console.log(b);
// NaN