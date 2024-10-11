var users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 32 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "Diana", age: 30 },
];

// Adding a new array of flower objects
var flowers = [
  { name: "Rose", color: "Red", type: "Perennial", price: 5.99 },
  { name: "Sunflower", color: "Yellow", type: "Annual", price: 3.99 },
  { name: "Lavender", color: "Purple", type: "Perennial", price: 4.50 },
  { name: "Tulip", color: "Pink", type: "Perennial", price: 2.99 },
  { name: "Daisy", color: "White", type: "Perennial", price: 3.50 }
];

const userContainer = document.getElementById("root");

let clutter = "";

users.forEach(function (user) {
  clutter += `<p>${user.name} - Age: ${user.age}</p>`;
});

userContainer.innerHTML = clutter;





