 fetch("https://dummyjson.com/products")
  .then((response) => response.json())  
  .then((data) => {
    const recipeContainer = document.getElementById("recipe-root"); // Select the container where the data will be displayed
    let recipeContent = ""; // Variable to hold the generated HTML

    // Assuming each product in the API is treated as a "recipe" for this example
    data.products.forEach(function (recipe) {
      recipeContent += `
        <div>
          <h2>${recipe.title}</h2>
          <p><strong>Category:</strong> ${recipe.category}</p>
          <p><strong>Description:</strong> ${recipe.description}</p>
          <p><strong>Price:</strong> $${recipe.price}</p>
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
