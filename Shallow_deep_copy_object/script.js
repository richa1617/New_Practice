
//Shallow vs depp copy of obj

//Shallow copy  : If we are making a shallow copy of an object then primitive types values are copied, memory addresses are copied for non-primitive/reference types



let obj={
    age:10,
    user :{
       name:"richa"
    }
  
  }
  

//Spread Operator (…)  :Spread Operator clones an object with its properties. It creates is a shallow copy which means only the first level primitive fields are copied by value and the rest of the nested objects are copied by reference.


  let clone={...obj}
  
  obj.age = 15
  obj.user.name="akash"
  
  console.log(obj.age) //15
  console.log(clone.age)  //10
  console.log(obj.user.name) //akash
  console.log(clone.user.name) //akash


  //Object.assign()

  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  
  const result = Object.assign(target, source);
  
  console.log(target);
  console.log(result)

  target.a =25

  console.log(target);
  console.log(result)