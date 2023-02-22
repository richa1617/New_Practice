//In Javascript, functions are objects. Objects can have properties and methods. So, with every function, we get these three methods.
//Call, apply and bind methods are used to set the this value, independent of how the function is called


function personIntro(){
    console.log(`${this.firstName} ${this.lastName}`)
}
const person={
    firstName :"Richa",
    lastName :"Mahajan"
}

personIntro()

personIntro.call(person)
//1. We didn't use the call() method, so this by default will refer to window object. window object doesn't have any properties like firstName or lastName. Hence, we get undefined undefined.
//2. This time we use call() and pass an object that has the required properties. this will now be person.

apply()
//The only difference between call and apply is the difference in how arguments are passed.In apply, arguments you can pass an argument as an array literal or a new array object.

//func.apply(thisObj, [args1, args2, ...]);


Bind() 
//It creates a copy of the function and it will bind it to the object and then return a function.It doesn't directly call the function rather it will return us a method that can be called later.

//bind() method gives you the copy of function which can be invoked later rather than directly invoking it just like in the call() method.


function test(arg1,arg2){
    console.log(this.num+arg1+arg2)
}

test.call({num:100},10,20) //parameter as list of arguements

test.apply({num:100},[10,20]) //parameter as array

let result =test.bind({num:100},10,10) // returns a new function and we need to call it
result()
