 var users = [
   { id: 1, name: "Alice", age: 28 },
   { id: 2, name: "Bob", age: 32 },
   { id: 3, name: "Charlie", age: 25 },
   { id: 4, name: "Diana", age: 30 },
 ];

 // Get the container element where the users will be displayed
 const userContainer = document.querySelector("div");

 // Iterate over the users array and display each user's details
 users.forEach(function (user) {
   const userDetails = document.createElement("p"); // Create a new <p> element for each user
   userDetails.textContent = `${user.name} - Age: ${user.age}`; // Set the text content
   userContainer.appendChild(userDetails); // Append the element to the container
 });
