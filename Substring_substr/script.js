//Difference between substr() and substring() in JavaScript

//The difference is in the second argument. The second argument to substring is the index to stop at (but not include), but the second argument to substr is the maximum length to return.


//string.substr(start, length)
//string.substring(start, end) // end is not inlcuded
const text = "Typewriter";
console.log(text.substring(2, 5)); // "pew"
console.log(text.substr(2, 1)); // "p" (1 character)
console.log(text.substr(2, 2)); // "pe" (2 character)