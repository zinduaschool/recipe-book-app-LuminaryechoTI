
const recipes = [
  {
    title: "Ugali na Sukuma Wiki",
    image: "https://via.placeholder.com/250",
    description: "A classic Kenyan staple: maize meal (ugali) served with sautéed collard greens (sukuma wiki)."
  },
  {
    title: "Nyama Choma",
    image: "https://via.placeholder.com/250",
    description: "Grilled meat (mostly goat or beef), a favorite Kenyan delicacy for any occasion."
  },
  {
    title: "Githeri",
    image: "https://via.placeholder.com/250",
    description: "A healthy dish of boiled maize and beans, traditionally from the Kikuyu community."
  },
  {
    title: "Mukimo",
    image: "https://via.placeholder.com/250",
    description: "A mashed dish made of potatoes, maize, and peas, often served with meat stew."
  },
  {
    title: "Chapati",
    image: "https://via.placeholder.com/250",
    description: "A soft, layered flatbread that pairs well with stews or tea."
  }
];


function renderRecipes(recipeList) {
  const recipeListContainer = document.getElementById("recipeList");
  recipeListContainer.innerHTML = ""; 

  recipeList.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2>${recipe.title}</h2>
      <p>${recipe.description}</p>
      <button>Save Recipe</button>
    `;

    recipeListContainer.appendChild(recipeCard);
  });
}


renderRecipes(recipes);


const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", function(e) {
  const searchQuery = e.target.value.toLowerCase();

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery)
  );

  renderRecipes(filteredRecipes); 
});
