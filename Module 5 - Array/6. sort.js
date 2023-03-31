/**
 * Array Sort - 🚀🚀
 */

// const fruits = ["apple", "cherry", "orange", "banana", "ball"];
// fruits.sort();
// console.log(fruits);

const numbers = [1, 4, 2, 6, 7, 3, 9, 8, 5, 61, 31, 51, 11];

function sortInAscendingOrder (a, b) {
    return a - b
}

function sortInDescendingOrder (a, b) {
    return b - a
}

numbers.sort(sortInDescendingOrder);
console.log(numbers);