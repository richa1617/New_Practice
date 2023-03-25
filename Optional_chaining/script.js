const jake = {
    workingHours: {
      mon: {
        leave: '8:00am',
        arrive: '3:00pm'
      },
      tue: {
        leave: '8:00am',
        arrive: '4:00pm'
      },
      wed : {
        leave: '8:00am',
        arrive: '5:00pm'
      }
    },
  
    printWorkingHoursFor(day) {
     
      return `Leave at ${this.workingHours[day].leave} and arrive at ${this.workingHours[day].arrive}`;
    }
  };

  // Suppose we were trying to find the working hours of jake on friday. There is no property called 'fri' on the jake object
console.log(jake.workingHours.fri); // Prints: undefined

// But suppose we did not know that, and tried to access the 'leave' property on 'fri'
// console.log(jake.workingHours.fri.leave); // Uncaught TypeError: Cannot read property 'leave' of undefined
// So we would like to have a null check for the 'jake.workingHours.fri' property before we access any properties on it

// We could do that by enclosing it in an if-block or in the && operator
if (jake.workingHours.fri) {
  console.log(jake.workingHours.fri.leave);
}
// or:
jake.workingHours.fri && console.log(jake.workingHours.fri.leave);

// But in ES6, we can use the optional chaining operator.
// Only if the property specified just before the ? exists, only then will the next property will be accessed.
// If not, then immediately 'undefined' will be returned.
// Here 'exists' means the 'Nullish' concept that we talked about before. So the 'leave' property will be accessed
// only if the 'fri' property is either null or undefined. Not if it is empty, or 0, or any other such falsy values


console.log(jake.workingHours.fri?.leave); // undefined