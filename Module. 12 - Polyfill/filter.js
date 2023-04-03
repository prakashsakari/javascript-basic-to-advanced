/**
 * A polyfill is a piece of Javascript code used to provide modern functionality on older browsers that do not support it.
 */

// Polyfill for filter

const arr = [1, 2, 3, 4, 5, 6];

function getFilteredArr(number) {
  return number > 3; // returns a boolean value; true or false
}

Array.prototype.myFilter = function (callback) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      // getFilteredArr(5)
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};

const result = arr.myFilter(getFilteredArr);
console.log(result);
