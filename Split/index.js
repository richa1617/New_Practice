// What is split method()
//Remember :Split method is for strings.
//The split() method divides a specific string into an array of substrings without changing the original string 
//It is used to convert strings to array


let string ="hello world from richa"

console.log(string.split(" "))

//Thje separator in this case is a space (" ") which means whenever the split method will see a space, it will divide the string and return the word before the separator


console.log(string.split(""))

console.log(string.split("",  1))
//the optional second parameter specifies number of split