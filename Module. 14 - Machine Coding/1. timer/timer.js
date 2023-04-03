const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerId;

function displayTime(hours, minutes, seconds) {
  currentTime.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function handleButtonClick(event) {
  const button = event.target.name;
  if (button === "start") {
    timerId = setInterval(() => {
      seconds++;
      if (seconds > 58) {
        seconds = 0;
        minutes++;
        if (minutes > 58) {
          minutes = 0;
          hours++;
        }
      }
      displayTime(hours, minutes, seconds);
    }, 100);
  }
  if (button === "stop") {
    clearInterval(timerId);
  }
  if (button === "reset") {
    clearInterval(timerId);
    seconds = minutes = hours = 0;
    displayTime(hours, minutes, seconds);
  }
}

buttonParent.addEventListener("click", handleButtonClick);
