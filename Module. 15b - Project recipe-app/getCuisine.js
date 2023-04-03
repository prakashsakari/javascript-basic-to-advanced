export const getCuisineCard = (arrOfCuisines, parentElement, createElement) => {
  for (let cuisine of arrOfCuisines) {
    const cuisineContainer = createElement("div");
    cuisineContainer.classList.add("filter");
    cuisineContainer.setAttribute("data-id", cuisine.ID);

    //creating checkbox
    const checkBox = createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("checkbox");
    checkBox.setAttribute("data-id", cuisine.ID);

    //creating label
    const label = createElement("label");
    label.classList.add(
      "cusine-label",
      "d-flex",
      "align-items-center",
      "gap-sm"
    );
    label.appendChild(checkBox);

    const labelText = createElement("span");
    labelText.innerText = cuisine.Cuisine;
    labelText.setAttribute("data-id", cuisine.ID);
    label.appendChild(labelText);
    label.setAttribute("data-id", cuisine.ID);

    cuisineContainer.appendChild(label);
    parentElement.appendChild(cuisineContainer);
  }
};
