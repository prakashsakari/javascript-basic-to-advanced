/**
 * Hoisitng is a process whereby you can access
 * the value of a variable or function
 * even before it is initialized
 */

var age = 100;
console.log(age);

var getUserName = function showName() {
  console.log("Prakash Sakari");
};

function showName() {
  console.log("Prakash Sakari");
}

showName();
getUserName();
