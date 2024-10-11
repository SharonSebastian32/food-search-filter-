async function fetchRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes"); // Make sure this URL is correct
    const data = await response.json();

    const recipeContainer = document.getElementById("recipe-root");
    let recipeContent = "";

    data.recipes.forEach(function (recipe) {
      recipeContent += `
        <div class="card">
          <img src="${recipe.image}" alt="${recipe.name}">
          <h2>${recipe.name}</h2>
          <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
         </div>
      `;
    });

    recipeContainer.innerHTML = recipeContent;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    const recipeContainer = document.getElementById("recipe-root");
    recipeContainer.innerHTML = "<p>Error fetching recipes</p>"; // Display error message
  }
}

// Call the function to fetch and display recipes
fetchRecipes();
