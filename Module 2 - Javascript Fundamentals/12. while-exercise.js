/**
 * User enters a number, if the number is greater than 50 then ask the user to enter a number less than 50 again
 */

let readlineSync = require("readline-sync");

let number = 500;

while (number >= 50){
    number = readlineSync.question("Enter a number less than 50 - ");
}

console.log("Number accepted");