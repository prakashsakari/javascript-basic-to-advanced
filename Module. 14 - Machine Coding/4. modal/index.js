const modalContainer = document.querySelector(".container");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  modalContainer.classList.remove("hide");
});

modalContainer.addEventListener("click", (event) => {
  const button = event.target.name;
  if (button === "close") {
    modalContainer.classList.add("hide");
  }
});
