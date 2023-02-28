//A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.




function main (num1,num2, a){
    console.log(num1+num2)
    a()
}


function sayHello(){
    console.log("Hello")
}

function sayHi(){
    console.log("hie")
}
main (10,20,sayHello)  // passed as parameter
                       // dont add parenthesis()


main (10,20,sayHi)

main(0,10,function (){       //anonymous callback function
    console.log("bye...")
})


main(0,10, ()=>{
    console.log("good night...")      //arrow function
})




//Callback with argument

function name(greet,a){
    console.log(greet)
    a(greet)
}

name("richa", (anything)=>{
    console.log("mahajan")
})


