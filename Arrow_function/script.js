//Arguments binding

function regularFunction(a, b) {
    console.log(arguments)
}
regularFunction(1, 2) //Arguments[1,2]

/*const arrow = (a,b) => {
    console.log(arguments)
}
arrow(1, 2)  ReferenceError: arguments is not defined */

var arrowFunction = (...args) => {
    console.log(...args)
}
arrowFunction(1, 2)    //1,2



var name = "richa"
let newObject = {
    name : "supi",
    arrowFunc: () => {
        console.log(this.name); 
    },
    regularFunc() {
        console.log(this.name); 
    },
    
   
}
newObject.arrowFunc(); // richa
newObject.regularFunc(); // supi


//hoisting


console.log(normalFunc())
function normalFunc() {
    return "Normal Function"
}

/*arrowFunc()    ReferenceError: Cannot access 'arrowFunc' before initialization
const arrowFunc = () => {
    return "Arrow Function"  
}*/

//No protype for arrow function
function traditional() {
    console.log(traditional.prototype)
}
traditional()
const arrow = () => {
    console.log(arrow.prototpye)
}
arrow()