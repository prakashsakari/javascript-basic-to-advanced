/**
 * Array Methods - Push & Concat
 */


/** Mutable (Changed) Object OR Immutable (Not Changed) */

// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);

// fruits.push("kiwi", "berries", "melons");
// console.log(fruits);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let arr4 = arr1.concat(arr2);
let arr5 = arr1.concat(arr2, arr3, arr4)
console.log(arr4);
console.log(arr5);