const cardId = localStorage.getItem("id");

const SINGLERECIPEURL = `https://recipeapi.prakashsakari.repl.co/api/recipes/${cardId}`;

const getData = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const singleRecipe = await getData(SINGLERECIPEURL);
console.log(singleRecipe);
