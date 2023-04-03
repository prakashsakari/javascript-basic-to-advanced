/**
 * A polyfill is a piece of Javascript code used to provide modern functionality on older browsers that do not support it.
 */

// Polyfill for map

const arr = [1, 2, 3, 4, 5];

function getSquareOfNum(number) {
  return number + 2;
}

Array.prototype.myMap = function (callback) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(callback(this[i], i, this));
  }
  return tempArr;
};

const squaredArr1 = arr.myMap(getSquareOfNum);
console.log(squaredArr1);
