//What is the difference between slice and splice?
//The slice() method returns a new array with a copied slice from the original array. The slice() method does not change the original array.

//The splice mutates the original array (by adding or remove) and returns the removed elements in a new array.The splice() method overwrites the original array.Return Value


let array=[5,6,7,8,9]

console.log(array.slice(2))
console.log(array.slice(0))
console.log(array.slice(-1)) // 0,0,3,4,5,6
console.log(array.slice(-2)) //1,2

let nums=[1,2,3,4,5,6]
let newnums=nums.splice(0,2,0,0)

console.log(nums)
console.log(newnums) 

//1st parameter specifies the index whict is 0

//2nd parameter specifies number of itmes to be delete. In our case it is 2.This implies remove 2 items from 0th index and the removed item is the returned value


//3 parameter specifies items to be add


let number=[1,2,3,4,5]
console.log(number.splice(0,0,1)) //[]
