
function rand10(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  let min = 1 ;
  let max = 10 ;


  console.log("Your random number is :",rand10(min, max))

  /**
 * The function `rand10` generates a random integer between a specified minimum and maximum value.
 * @param min - 1
 * @param max - The `max` parameter in the `rand10` function represents the maximum value that you want
 * the random number to be generated within. In this case, the `max` value is set to 10, so the random
 * number will be between 1 and 10 inclusive.
 * @returns The `rand10` function generates a random integer between the `min` and `max` values
 * (inclusive) using `Math.random()` method. The function returns a random number between 1 and 10
 * (inclusive) in this case.
 */