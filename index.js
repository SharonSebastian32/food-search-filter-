let allRecipes = [];  

 function displayRecipes(recipes) {
  const recipeContainer = document.getElementById("recipe-root");
  recipeContainer.innerHTML = "";  

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.name;
    card.appendChild(img);

    const title = document.createElement("h2");
    title.innerText = recipe.name;
    card.appendChild(title);

    const cuisine = document.createElement("p");
    cuisine.innerHTML = `<strong>Cuisine:</strong> ${recipe.cuisine}`;
    card.appendChild(cuisine);

    const ingredients = document.createElement("p");
    ingredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.ingredients.join(
      ", "
    )}`;
    card.appendChild(ingredients);

    recipeContainer.appendChild(card);
  });
}

 async function fetchRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();

    allRecipes = data.recipes;  
    displayRecipes(allRecipes);  
  } catch (error) {
    console.error("Error fetching recipes:", error);
    const recipeContainer = document.getElementById("recipe-root");
    recipeContainer.innerHTML = "<p>Error fetching recipes</p>";  
  }
}

// Function to filter recipes based on search input
function filterRecipes(event) {
  const searchText = event.target.value.toLowerCase();
  const filteredRecipes = allRecipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchText) ||
      recipe.cuisine.toLowerCase().includes(searchText) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchText)
      )
  );
  displayRecipes(filteredRecipes);
}

// Add event listener to search input
document
  .getElementById("search-input")
  .addEventListener("input", filterRecipes);

// Call the function to fetch and display recipes
fetchRecipes();
