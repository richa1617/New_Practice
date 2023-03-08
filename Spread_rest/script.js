//Spread operator allows iterables (arrays, objects, and strings) to be expanded into single arguments. It’s denoted by three dots(…) .It just unpacks a number of values into individual values.

//we can see that spread operated expanded the string and array into individual elements.

console.log("-------SPREAD OPERATOR--------")
let x=[1,2,3]
let name="Richa"


console.log(name)
console.log(...name)
console.log(x)
console.log(...x)

//We can concatenate two arrays with the spread operator

let a=[1,2,3,4]
let b=[10,11,12]
console.log(...a,...b)

//We can copy array using the spread operator in array literals

let first=[1,2,3,4]
let second=[...first]
console.log(second)

console.log("-------REST OPERATOR--------")

function abc(...values){
   return values
}

console.log(abc(1,2,3))

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10