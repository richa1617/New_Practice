"use strict"
//Not Allowed in Strict Mode


//Using a variable,object without declaring it, is not allowed:


x="richa" // This will cause an error

person ={
    name:"richa",
    age:24
}               // This will cause an error


//Deleting a variable (or object) is not allowed.
let name ="akash"
delete name    // // This will cause an error

//Deleting a function is not allowed.

function add(a,b){
    return a+b
}

//Octal numeric literals are not allowed:

let x=010

//The word eval cannot be used as a variable:

let eval =3.14

//The word eval cannot be used as a variable:
let arguments =45


//Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

let public="sun"
