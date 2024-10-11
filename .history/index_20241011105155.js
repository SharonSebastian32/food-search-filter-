 fetch("https://dummyjson.com/products")
  .then((response) => response.json())  
  .then((data) => {
    const recipeContainer = document.getElementById("recipe-root");  
    let recipeContent = "";  

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

     recipeContainer.innerHTML = recipeContent;
  })
  .catch((error) => {
    console.error("Error fetching recipes:", error); // Log any errors
    const recipeContainer = document.getElementById("recipe-root");
    recipeContainer.innerHTML = "<p>Error fetching recipes</p>"; // Show an error message on the page
  });
