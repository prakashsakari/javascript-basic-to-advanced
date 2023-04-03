/**
 * Arguments Object in Non-Arrow Function
 * -- arguments object is an array like object present locally inside a function
 *    and it contains value of all the arguments passed to a function.
 */

function calculateTotal(a = 10) {
  // a = 100;
  console.log(a);
  console.log(arguments);
  arguments[0] = 9;
  console.log(arguments);
  console.log(a);
}

calculateTotal(4);
