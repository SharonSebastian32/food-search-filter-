var users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 32 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "Diana", age: 30 },
];

const userContainer = document.querySelector("root");

users.forEach(function (user) {
  const userDetails = document.createElement("p");
  userDetails.textContent = `${user.name} - Age: ${user.age}`;
  userContainer.appendChild(userDetails);
});
