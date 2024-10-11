var flowers = [
  { name: "Rose", color: "Red", type: "Perennial", price: 5.99 },
  { name: "Sunflower", color: "Yellow", type: "Annual", price: 3.99 },
  { name: "Lavender", color: "Purple", type: "Perennial", price: 4.5 },
  { name: "Tulip", color: "Pink", type: "Perennial", price: 2.99 },
  { name: "Daisy", color: "White", type: "Perennial", price: 3.5 },
];

const flowerContainer = document.getElementById("flowerDiv");
let clutter = "";

flowers.forEach(function (flv) {
  clutter += `<h1 style="color:${flv.color}">Name of the flower is ${flv.name}</h1>
  <p>price is ${</p>
  `;
});

flowerContainer.innerHTML = clutter;
