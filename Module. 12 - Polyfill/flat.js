/**
 * A polyfill is a piece of Javascript code used to provide modern functionality on older browsers that do not support it.
 */

// Polyfill for flat

const arr = [1, 2, 3, 4, [5, 6], [[7, 8]]]; // [1, 2, 3, 4, 5, 6, 7, 8];\

Array.prototype.myFlat = function (depth = 1) {
  let tempArr = [];
  function getFlattendArr(array, depth) {
    for (let element of array) { // array = [[7, 8]]
      if (Array.isArray(element) && depth) {
        getFlattendArr(element, depth - 1);
      } else {
        tempArr.push(element);
      }
    }
  }
  getFlattendArr(this, depth);
  return tempArr;
};

const result = arr.myFlat(2);

console.log(result);
