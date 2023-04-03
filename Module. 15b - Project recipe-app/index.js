import { getRecipeCard } from "./getRecipeCard.js";
import { getCuisineCard } from "./getCuisine.js";

const cardParentContainer = document.querySelector(".main");
const cuisineParentContainer = document.querySelector(".cuisine-filter");
const searchBox = document.querySelector(".input");

const RECIPEURL = "https://recipeapi.prakashsakari.repl.co/api/recipes";
const CUISINEURL =
  "https://recipeapi.prakashsakari.repl.co/api/recipes/cuisines";

let searchValue = "";
let filteredArrOfRecipes = [];
let arrOfSelectedCuisine = [];

const createElement = (element) => document.createElement(element);

const getData = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const recipes = await getData(RECIPEURL);
const cuisines = await getData(CUISINEURL);

const getFilteredData = () => {
  filteredArrOfRecipes =
    searchValue?.length > 0
      ? recipes.filter((recipe) =>
          recipe.TranslatedRecipeName.toLowerCase().includes(searchValue)
        )
      : recipes;
  if (arrOfSelectedCuisine?.length > 0) {
    filteredArrOfRecipes =
      searchValue?.length < 1 ? recipes : filteredArrOfRecipes;
    filteredArrOfRecipes = filteredArrOfRecipes.filter((recipe) =>
      arrOfSelectedCuisine.includes(recipe.Cuisine)
    );
  }
  return filteredArrOfRecipes;
};

const searchInputHandler = (event) => {
  searchValue = event.target.value.toLowerCase();
  const filteredData = getFilteredData();
  cardParentContainer.innerHTML = "";
  getRecipeCard(filteredData, cardParentContainer, createElement);
};

const handleCusineClick = (event) => {
  const id = event.target.dataset.id;
  const isSelected = event.target.checked;
  const selectedCuisine = cuisines.reduce(
    (acc, cur) => (cur.ID === acc ? cur.Cuisine : acc),
    id
  );
  arrOfSelectedCuisine = isSelected
    ? [...arrOfSelectedCuisine, selectedCuisine]
    : arrOfSelectedCuisine.filter((cuisine) => cuisine !== selectedCuisine);
  const filteredArrOfCuisine = getFilteredData();
  cardParentContainer.innerHTML = "";

  getRecipeCard(filteredArrOfCuisine, cardParentContainer, createElement);
};

searchBox.addEventListener("keyup", searchInputHandler);

cuisineParentContainer.addEventListener("click", handleCusineClick);

getRecipeCard(recipes, cardParentContainer, createElement);
getCuisineCard(cuisines, cuisineParentContainer, createElement);

cardParentContainer.addEventListener("click", (event) => {
  const cardId = event.target.dataset.id;
  if (cardId) {
    localStorage.clear();
    localStorage.setItem("id", cardId);
    location.href = "single-recipe.html";
  }
});

console.log(cuisines);
