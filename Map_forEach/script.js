/*.Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?

Both map , the forEach() method receives a function as an argument and executes it once for each array element.
map() and forEach() both iterate over an existing array, and they both perform the provided function once for every item in that array

If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice.


1. The first difference between map() and forEach() is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements. 

2.The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.
That's something you can't do with forEach() because, as you might guess, it returns undefined.


3.forEach() does not mutate the array on which it is called, but the function provided as callbackFn can. 


*/

const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.forEach(x => x * x)
//return value: undefined

myAwesomeArray.map(x => x * x)
//return value: [1, 4, 9, 16, 25]


const array = [1, 2, 3, 4, 5]
array.forEach(x => x * x).reduce((total, value) => total + value)
// Uncaught TypeError: Cannot read property 'reduce' of undefined
array.map(x => x * x).reduce((total, value) => total + value)
//return value: 55