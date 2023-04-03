// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// const requests = urls.map((url) => fetch(url));
// console.log(requests);

// const promise = Promise.all(requests);

// promise
//   .then((responses) =>
//     responses.forEach((response) => console.log(response.url))
//   )
//   .catch((err) => console.log(err));

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 2000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 3000)
//   ),
// ]).catch((err) => console.log(err)); // Error: Whoops!

// Promise.allSettled([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err)); // Error: Whoops!

// Promise.any([
//   new Promise((res, rej) => setTimeout(() => rej(new Error("1st")), 1000)),
//   new Promise((res, rej) => setTimeout(() => rej(new Error("2nd")), 2000)),
//   new Promise((res, rej) => setTimeout(() => rej(new Error("3rd")), 3000)),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("promise 1!"), 1500);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("promise 2"), 4000);
//   });

//   let result1 = await promise1; // wait until the promise resolves (*)
//   console.log(result); // "done!"
//   console.log(result1);
// }

// f();

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("https://javascript.info/no-such-user.json").catch(alert);

// async function loadJson(url) {
//   const response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new Error(response.status);
//   }
// }

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // shows 10 after 1 second
  wait().then((result) => console.log(result));
}

f();
