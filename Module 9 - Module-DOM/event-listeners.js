let startButton = document.querySelector(".start");
let countButton = document.querySelector(".count");
let stopButton = document.querySelector(".stop");
let input = document.querySelector(".input");

let value = 0;

function showMessage() {
  console.log("Button Clicked");
}

startButton.addEventListener("click", showMessage);

startButton.addEventListener("click", () => {
  if (startButton.innerText === "Start") {
    startButton.innerText = "Begin";
    startButton.innerHTML = "<span>Lets begin</span>";
  } else {
    startButton.innerText = "Start";
  }
});

countButton.addEventListener("click", () => {
  value++;
  console.log(value);
});

stopButton.addEventListener("click", () => {
  // stopButton.classList.add("btn-red");
  stopButton.classList.toggle("btn-red");
});

input.addEventListener("change", () => {
  console.log("Change -", input.value);
});

input.addEventListener("input", () => {
  console.log("Input -", input.value);
});

input.addEventListener("focus", () => {
  console.log("Focus -", input.value);
});

input.addEventListener("keyup", () => {
  console.log("keyup -", input.value);
});

/** Mouse Events */

input.addEventListener("mousedown", (event) => {
  console.log("Mousedown -", event.button);
});

document.body.addEventListener("mousedown", (event) => {
  let xcor = event.clientX;
  let ycor = event.clientY;
  let cors = `X cor - ${xcor}, Y cor - ${ycor}`;
  console.log(cors);
});

input.addEventListener("mousedown", (event) => {
  let xcor = event.clientX;
  let ycor = event.clientY;
  let cors = `X cor - ${xcor}, Y cor - ${ycor}`;
  console.log(cors);
});
