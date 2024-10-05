// app.js
const addRecipeBtn = document.getElementById('add-recipe-btn');
const recipeList = document.getElementById('recipe-list');
let recipes = [];

addRecipeBtn.addEventListener('click', () => {
  const name = document.getElementById('recipe-name').value;
  const description = document.getElementById('recipe-description').value;
  const ingredients = document.getElementById('recipe-ingredients').value.split(',');
  const steps = document.getElementById('recipe-steps').value;

  const recipe = { id: Date.now(), name, description, ingredients, steps };
  recipes.push(recipe);
  displayRecipes();
});

function displayRecipes() {
  recipeList.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard = `
      <div class="recipe-card">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <p><strong>Steps:</strong> ${recipe.steps}</p>
        <button onclick="deleteRecipe(${recipe.id})">Delete</button>
      </div>
    `;
    recipeList.innerHTML += recipeCard;
  });
}

function deleteRecipe(id) {
  recipes = recipes.filter(recipe => recipe.id !== id);
  displayRecipes();
}
