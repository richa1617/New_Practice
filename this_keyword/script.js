//1.Global context :When used alone, this refers to the global object. Because this is running in the global scope.In a browser window the global object is [object Window]:


console.log(this)

//2.Default Binding:(standalone function invocation) When the this keyword is inside any function, its value depends on how the function is called. When simply calling a function, this is set to the global object.

function f(){
   
    return this // window{}
}

function f2(){
    "use strict"
    return this
}

console.log(f())  //window{}
console.log(f2()) //undefined


       
//3 Implicit binding :In implicit and explicit binding the ‘this’ keyword for the function belongs to the object the function is bound to.Here function foo() is implicitly bound to object ‘a’ while executing a.foo(). Thus ‘this’ keyword point to object ‘a’ 

const a={
    name:"richa",
    foo :function(){
       console.log(this)
    }
}

a.foo()  //{name: 'richa', foo: ƒ}


//4 :Explicit Binding: Here, we force a function call to use a particular object for this binding by using call, apply and bind

let b={
    name : "akash"
}

function foo(){
    console.log(this)
}

const newFoo=foo.bind(a)
newFoo()   //{name: 'richa', foo: ƒ}



//5  Constructor Function :A constructor is a function that creates an object and initializes that object with a class.The this keyword inside a constructor will refer to the instance of that constructor, not the constructor itself.


function Person(name, age) {
    this.name = name
    this.age = age
  
    this.readPerson = function() {
      console.log(this)
    }
  }
  
  
  const joe = new Person('Joe', 31)
  
  
  joe.readPerson()   //Person {name: 'Joe', age: 31, readPerson: ƒ}

  //6 Arrow functions :With arrow functions, this keyword works differently than with regular functions.Arrow functions do not get their own 'this' keyword, they get the 'this' keyword of the surrounded function (the parent function).
  
  const x = () => {

    console.log(this)       //window{}
    console.log(this === window) //true
  }
  
 x()
  
 
  const y = () => {
    'use strict'
    console.log(this)          //window{}
    console.log(this === window) //true
  } 
  y()
  
