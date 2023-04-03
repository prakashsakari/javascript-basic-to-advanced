/**
 * Callback Functions - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.
 */

// e.g - 01

function outer(callback) {
  callback();
}

function showMessage() {
  console.log("Hello from callback function");
}

outer(showMessage);

// e.g - 02

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log("clicked");
});

// e.g - 03

setTimeout(function callback() {
  console.log("executed after a delay");
}, 4000);

// fetch("http://.....")
//     .then(function(){
//         //response logic
//     })
