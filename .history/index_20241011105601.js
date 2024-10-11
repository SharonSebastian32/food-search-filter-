// Fetch data from the DummyJSON API for recipes
fetch("https://dummyjson.com/recipes")
  .then((response) => response.json()) // Parse the response to JSON
  .then((data) => {
    const recipeContainer = document.getElementById("recipe-root"); // Select the container where the data will be displayed
    let recipeContent = ""; // Variable to hold the generated HTML

    // Loop through each recipe in the fetched data
    data.recipes.forEach(function (recipe) {
      recipeContent += `
        <div>
          <h2>${recipe.name}</h2>
          <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions}</p>
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        </div>
        <hr>
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
