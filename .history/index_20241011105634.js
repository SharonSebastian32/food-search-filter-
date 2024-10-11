 fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())  
  .then((data) => {
    const recipeContainer = document.getElementById("recipe-root");  
    let recipeContent = "";  

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

     recipeContainer.innerHTML = recipeContent;
  })
  .catch((error) => {
    console.error("Error fetching recipes:", error); // Log any errors
    const recipeContainer = document.getElementById("recipe-root");
    recipeContainer.innerHTML = "<p>Error fetching recipes</p>"; // Show an error message on the page
  });
