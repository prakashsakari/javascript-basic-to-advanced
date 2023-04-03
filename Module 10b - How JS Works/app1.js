const loginButton = document.querySelector(".login-btn");
const modal = document.querySelector(".modal");

modal.classList.add("hide");

loginButton.addEventListener("click", () => {
  modal.classList.add("show");
});
