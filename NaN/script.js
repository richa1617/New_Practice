//Q.Explain what is NaN and how to check it
//The NaN property is a global property that represents "Not-a-Number" value. 

// It is generally a result of incorrect or undefined mathematical operation
// It indicates that a value is not a legal number.

console.log(typeof NaN)

console.log(NaN == NaN) // false
console.log(NaN === NaN) //false
console.log(NaN > 0 )//false
console.log(NaN = 0) //false
console.log(NaN < 0) //false


/// To check NaN:

//isNaN()
//The isNaN() function determines whether a value is NaN or not.

//Return :True if the argument coerces to NaN, otherwise returns false.


//Number.isNaN
//Determines whether the argument is NaN.There is no coercion here.
 

//The difference between these 2 methods is that Number.isNaN doesn't coerce or forcefully convert the argument to a Number before determining whether it has the value N