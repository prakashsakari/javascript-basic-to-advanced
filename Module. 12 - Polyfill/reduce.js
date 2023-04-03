/**
 * A polyfill is a piece of Javascript code used to provide modern functionality on older browsers that do not support it.
 */

// Polyfill for reduce

const arr = [1, 2, 3, 4, 5, 6];

function getSum(acc, cur) {
  return acc + cur; // 3 + 3
}

Array.prototype.myReduce = function (callback, initalValue) {
  let acc = initalValue ? initalValue : this[0]; // acc = 1
  for (let i = initalValue ? 0 : 1; i < this.length; i++) {
    // this[2] = 3 = cur
    // cur = this[i];
    acc = callback.call(this, acc, this[i], i, this);
  }
  return acc;
};

const total = arr.myReduce(getSum, 8);
console.log(total);
