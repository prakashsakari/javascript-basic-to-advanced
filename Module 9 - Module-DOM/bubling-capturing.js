/** Event Bubling and Capturing */

let form = document.querySelector("#form");
let div = document.querySelector("#div");
let para = document.querySelector("#p");

para.addEventListener("click", () => {
    alert("para tag");
});

div.addEventListener("click", () => {
    alert("div tag");
});

form.addEventListener("click", () => {
    alert("form tag");
});

para.addEventListener("click", () => {
    alert("para tag");
}, true);

div.addEventListener("click", () => {
    alert("div tag");
}, true);

form.addEventListener("click", () => {
    alert("form tag");
}, true);