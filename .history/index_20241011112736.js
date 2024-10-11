// Fetch data from the DummyJSON API for recipes
fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())  
  .then((data) => {
    const recipeContainer = document.getElementById("recipe-root");  
    let recipeContent = ""; // Variable to hold the generated HTML

    // Loop through each recipe in the fetched data
    data.recipes.forEach(function (recipe) {
      recipeContent += `
        <div class="card">
          <img src="${recipe.image}" alt="${recipe.name}">
          <h2>${recipe.name}</h2>
          <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        </div>
      `;
    });

    // Insert the generated HTML content into the selected div
    recipeContainer.innerHTML = recipeContent;
  })
  .catch((error) => {
    console.error("Error fetching recipes:", error); // Log any errors
    const recipeContainer = document.getElementById("recipe-root");
    recipeContainer.innerHTML = "<p>Error fetching recipes</p>"; // Show an error message on the page
  });
