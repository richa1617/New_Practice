//The break statement "jumps out" of a loop.

//The continue statement "jumps over" one iteration in the loop.



for (let i = 1; i <= 10; i++){
    if (i == 6) break;
    console.log(i);
  }


 // Output 1,2,3,4,5

 for (let i = 1; i <= 10; i++){
    if (i == 6) continue;
    console.log(i);
  }

  //Output 1,2,3,4,5,7,8,9,10