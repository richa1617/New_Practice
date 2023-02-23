/*Explain array pop vs shift method and push vs unshift method

* Unshift and shift works at the beginning therefore the whole array shift sideways (by adding and removing items from the beginning

* Push and pop works at the end 


The method with the longer name add an item.

The unshift() method adds new elements to the beginning of an array.The unshift() method overwrites the original array.

The shift() method removes the first item of an array.The shift() method changes the original array.The shift() method returns the shifted element.

The push() method adds new items to the end of an array.The push() method changes the length of the array.

The pop() method removes (pops) the last element of an array.The pop() method changes the original array.The pop() method returns the removed element. */



const animals=["pig", "lion", "sheep"]
const count =animals.push("cow")
console.log(count)  // 4
console.log(animals) //["pig", "lion", "sheep", "cow"]


const vegetagles=["kale", "cabbage", "pumpkin"]
console.log(vegetagles.pop()) // pumpkin
vegetagles.pop()
console.log(vegetagles) // ["kale"]



const  array =[1,2,3,4]
const firstElement=array.shift()
console.log(firstElement) //1
console.log(array) //[2,3,4]

const number=[5,6,7]
console.log(number.unshift(3,4)) //5
console.log(number) //[3, 4, 5, 6, 7]











