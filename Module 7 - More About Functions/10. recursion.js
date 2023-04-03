/**
 * Recursion is a programming term where the function is called from itself
 */

// factorial of 5 --> 5x4x3x2x1 - 120
// number x (number - 1) x (number - 2) x (number - 3) x (number - 4)

function factorialRecursive(number) {
  if (number === 1) {
    return number;
  }
  return number * factorialRecursive(number - 1);
}

const result = factorialRecursive(5);
console.log(result);

// function factorial(number) {
//   let total = 1;
//   for (let i = number; i >= 1; i--) {
//     total = total * i;
//   }
//   return total;
// }

// console.log(factorial(5));
