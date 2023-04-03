/**
 * Given an array write a function that returns an object with sum of even and odd numbers
 * arr = [1, 2, 3, 4, 5, 6]
 * OUTPUT = {even: 12, odd: 9}
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const reducerFunction = (acc, cur) =>
  cur % 2 === 0
    ? { ...acc, even: acc.even + cur }
    : { ...acc, odd: acc.odd + cur };

const result = arr.reduce(reducerFunction, { even: 0, odd: 0 });

console.log(result);

/**
 * const acc = {even: 0, odd: 0}
 * const cur = 1
 * acc.even + cur;
 * acc --> {even: 1, odd: 0}
 */
