/*All undeclared variables are global variables.

function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);

Accessible as a global variable outside hoist() function
Output: 20


console.log(b);

Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined


//Hoisting with var

console.log(sentence);                 Output: undefined (but no error)
var sentence = 'The variable has been hoisted.';


Hositing with let and const 

console.log(name);
let name="Richa"    Output :ReferenceError: Cannot access 'name' before initialization */

//Function declarations
//Function declarations are hoisted completely to the top. So we can invoke a function before declaring it.

hoisted();       // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};


/*Function expressions
Function expressions are not hoisted, and the interpreter throws a TypeError since it sees expression as a variable and not a function.

expression(); //Output:        "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?'); */


   