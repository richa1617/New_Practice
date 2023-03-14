const person = {
    name: " Richa Mahajan",
    location: "Mumbai",   
} 
//setItem
localStorage.setItem("user", JSON.stringify(person))

//getItem
console.log(JSON.parse(localStorage.getItem("user")))

//key
console.log(localStorage.key(0))

//removeItem

localStorage.removeItem("user")

console.log(user)

//clear


localStorage.clear()

//This method unlike the previous one will clear the entire localStorage.

