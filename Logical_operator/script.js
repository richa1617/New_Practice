//There are three logical operators: the logical and, logical or, and logical not or && || and !

//The && or Logical AND operator finds the first falsy expression in its operands and returns it and if it does not find any falsy expression it returns the last expression.


console.log("I am truthy" && false)  //false
console.log(false && "I am truthy") //false
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

console.log("I am truthy" && true && ["I am also true"]) // ["I am also true"]



//The || or Logical OR operator finds the first truthy expression in its operands and returns it. This too employs short-circuiting to prevent unnecessary work. It was used before to initialize default parameter values IN functions before ES6 Default function parameters was supported.

console.log("I am truthy" ||false)  // I am truthy
console.log(false || "I am truthy") //I am truthy
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

//The logical NOT (!) operator performs logical negation on an expression and return a boolean

//if value is truthy it returns false

!true         // false
!-1           // false
!"-1"         // false
!42           // false
!"42"         // false
!"foo"        // false
!"true"       // false
!"false"      // false
!{}           // false
![]           // false
!function(){} // false

//if value is falsy it returns true

!false        // true
!null         // true
!undefined    // true
!NaN          // true
!0            // true
!""           // true 
