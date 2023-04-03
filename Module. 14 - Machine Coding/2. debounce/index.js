const input = document.querySelector(".input");

function inputHanlder(event) {
  console.log(event.target.value);
}

function debounce(callback, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const deboouncedInputHandler = debounce(inputHanlder, 500);

input.addEventListener("keyup", deboouncedInputHandler);
