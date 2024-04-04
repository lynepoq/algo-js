
let arr = []
let min = 1 ;
let max = 10 ;
let n = prompt("Enter a number between 1 and 10 to generate an array.") ;
function rand10(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min ;
  }
  
function multiRand(n) { 
    for (i=0; i < n; i++) {
    arr.push(rand10(1,10)) ;

}
return arr ; 
 }
 
console.log(multiRand(n)) ;


/**
 * This function generates an array of random numbers between 1 and 10 based on user input.
 * @param min - 1
 * @param max - 10
 * @returns The `multiRand` function generates an array of random numbers between 1 and 10 based on the
 * user input `n`. The function returns the array of random numbers.
 */