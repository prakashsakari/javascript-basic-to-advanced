/**
 * async await
 */

// let promise = new Promise((resolve) => resolve("done"));
// promise.then((res) => console.log(res)).catch((err) => console.log(err));

const getUserData = async () => {
  try {
    const promise = await fetch("https://mockdata.prakashsakari.repl.co/users");
    const response = await promise.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

getUserData();

async function showResponse() {
  try {
    let promise = new Promise((res, rej) => rej("promise rejected"));
    let result = await promise; // function execution stop her until the promise is settled
    console.log(result);
  } catch (err) {
    console.log("Error Occured::", err);
  }
}

// showResponse();
