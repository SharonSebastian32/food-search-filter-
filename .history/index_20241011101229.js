var users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 32 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "Diana", age: 30 },
];

// Select the element with the ID 'root'
const userContainer = document.getElementById("root");

// Create a variable to hold the HTML content
let userContent = "";

// Loop through each user and append their details to the content
users.forEach(function (user) {
  userContent += `<p>${user.name} - Age: ${user.age}</p>`;
});

// Set the innerHTML of the selected element to the generated content
userContainer.innerHTML = userContent;
