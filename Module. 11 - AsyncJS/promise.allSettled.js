/**
 * Promise.allSettled(arrOfPromises)
 */

let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 3000)
);
let promise2 = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Promise 2 reject")), 2000)
);
let promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 rejected"), 1000)
);

let arrOfPromises = [promise1, promise2, promise3];

let promise = Promise.allSettled(arrOfPromises);
promise.then((response) => response.forEach((data) => console.log(data)));
