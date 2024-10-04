// Mock recipe detail data
const recipeDetail = {
    title: 'Spaghetti Bolognese',
    image: 'spaghetti.jpg',
    ingredients: [
      '200g spaghetti',
      '100g minced beef',
      '1 can of tomatoes',
      '1 onion, chopped',
      '2 garlic cloves, minced',
      'Salt and pepper'
    ],
    instructions: 'Cook the pasta. Fry the onions and garlic. Add the minced beef and cook until brown. Add tomatoes and simmer. Serve over spaghetti.'
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const recipeDetails = document.getElementById('recipeDetails');
  
    function displayRecipeDetails(recipe) {
      recipeDetails.innerHTML = `
        <h1>${recipe.title}</h1>
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>Ingredients:</h2>
        <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h2>Instructions:</h2>
        <p>${recipe.instructions}</p>
        <button id="saveRecipe">Save Recipe</button>
      `;
    }
  
    displayRecipeDetails(recipeDetail);
  
    
    document.getElementById('saveRecipe').addEventListener('click', () => {
      let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
      savedRecipes.push(recipeDetail);
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      alert('Recipe saved!');
    });
  });
  