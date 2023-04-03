/**
 * Promise - Promise is an object that has the status of an async operation, and its corresponding value.
 */

const URL = "https://mockdata.prakashsakari.repl.co/users";

let promise = fetch(URL);
promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log({ data });
  })
  .catch(function (error) {
    console.log("Error Occured", error);
  });
