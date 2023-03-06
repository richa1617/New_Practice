//Object literal :The Simplest and easiest way to create an object is using Object Literal “{}”.
 
let user={
    name:"richa",
    age:2
};
console.log(user)

//Constructor function :Constructor is nothing but a function and with help of new keyword, constructor function allows to create multiple objects of same flavour.


function Person (name,location){
    this.name=name;
    this.location=location
}

let father =new Person( "Rahul", "mumbia")
let mother =new Person( "Megha", "mumbia")

console.log(father)
console.log(mother)

//We can new proeprty or methods object

father.gender ="male"

//The method will be added to myFather. Not to myMother.

console.log(father)



//You cannot add a new property or method to an object constructor by following way.
//To add a new property to a constructor, you must add it to the constructor function:

//Person.nationality = "Indian";

//We need to add this inside Person function

function Person (name,location){
    this.name=name;
    this.location=location
    this.nationality=this.nationality
}




//Object constructor
const person = new Object({
    name:"richa",
    status:"married"
});

console.log(person)


//Object.create :The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.This pattern comes in very handy when we are asked to create objects from other existing objects


let girl=Object.create(user)
girl.name="usha"
girl.gender= "female"
console.log(girl)

//ES class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  
  let myCar = new Car("Ford", 2014);
  console.log(myCar)
