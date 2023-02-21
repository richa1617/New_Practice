//How to convert array into strings?

//by using array.join()

//It function is to add all the elements in an array and return a string with a separator separating all the elements.

//It should be noted that if the array is empty, null, or undefined the join() method will return an empty string. Also, if the array has only one element then the join() method will return that element as a string without the separator.

let array=["Whatsapp", "Telegram", "Instagram", "Facebook"]
console.log(array.join("")) // No space

console.log(array.join(" ")) //Space
console.log(array.join("-"))//With -
console.log(array.join())// default is ,