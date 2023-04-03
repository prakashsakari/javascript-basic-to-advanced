/**
 * Promise.all([arrayOfPromise])
 * https://api.github.com/users/prakashsakari
 */

let users = ["prakashsakari", "AshishJangra27"];

let arrOfPromises = users.map((user) =>
  fetch(`https://api.github.com/users/${user}`)
);

let promise = Promise.all(arrOfPromises);
promise
  .then((response) => response.forEach((data) => console.log(data.url)))
  .catch((err) => console.log(err.message));

// let promise1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Promise 1 resolved"), 3000)
// );
// let promise2 = new Promise((_, reject) =>
//   setTimeout(() => reject("Promise 2 reject"), 2000)
// );
// let promise3 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Promise 3 rejected"), 1000)
// );

// let arrOfPromises = [promise1, promise2, promise3];

// let promise = Promise.all(arrOfPromises);
// promise.then((res) => console.log(res)).catch((err) => console.log(err));

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// promise3.then((res) => console.log(res));
