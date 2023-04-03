let btnContainer = document.querySelector("#btn-container");

btnContainer.addEventListener("click", (event) => {
  let btnText = event.target.innerText;
  if (btnText === "Red") {
    event.target.classList.toggle("btn-red");
  }
});
