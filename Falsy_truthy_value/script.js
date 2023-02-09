//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. 

//When a value is truthy in Javascript, it does not means that the value is equal to true but it means that the value coerces to true when evaluated in a boolean context

//How to check if a value is falsey?
 //Use the Boolean function or the Double NOT operator !!
//The following are the only six values that are considered as falsey values in JavaScript.
false
undefined
 null
 ""   
 NaN
 0


console.log(Boolean(NaN)) //false
console.log(Boolean("")) //false
console.log(Boolean([])) //true
console.log(Boolean({})) //true
console.log(Boolean(null)) //false