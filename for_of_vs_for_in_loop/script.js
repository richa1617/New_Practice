/*
for...in is used for iterating over enumerable properties of objects. That simply refers to objects that have properties with values that can be looked over.


The for...of iterator on the other hand serves iterable collections. This refers to objects whose enumerable properties can be followed in order. Arrays and strings still work because they use indexes, but an Object will not because there is no order to its keys.

*/



const str="fruits"


//For…in loop iterating over a String to get the index
for(let char in str){
    //console.log(char)      // 0,1,2,3,4,5
}


//For…of loop iterating over a String to get the value
for(let char of str){
    //console.log(char)      // f,r,u,i,t,s
}

//For…in loop iterating over an Array to get the index:

let arr=["u","v","w","x",'y']
for(let index in arr){
    console.log(index)   //0,1,2,3,4
}  

//For…of loop iterating over an Array to get the value:
for(let index of arr){
    console.log(index)   //u,v,w,x,y
}


//For…in loop iterating over an Object to get the key:

let obj={
    name:"richa",
    age:"27",
    country:"India"
}


for (let key in obj){
    console.log(key)     //name,age,country
}


//For…of loop iterating over an Object to get the value:


for (let key of obj){
    console.log(key)     //TypeError: undefined is not a function (near '...key of obj...')
}


/*

Conclusion:
Use for..in if you want to iterate over String or Array to get the index of it.

Use for..of if you want to iterate over String or Array to get the value of it.

Use for..in if you want to iterate over an Object (key, value pair )to get only the key of it.
5




*/