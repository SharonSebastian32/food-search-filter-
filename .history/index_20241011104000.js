 
var events = [
  { 
    name: "Tech Conference 2023",
    date: "2023-09-15",
    venue: "Convention Center",
    capacity: 500,
    type: "Conference",
    price: 299.99
  },
  { 
    name: "Summer Music Festival",
    date: "2023-07-22",
    venue: "Central Park",
    capacity: 10000,
    type: "Festival",
    price: 89.99
  },
  { 
    name: "Corporate Team Building",
    date: "2023-10-05",
    venue: "Adventure Park",
    capacity: 50,
    type: "Workshop",
    price: 149.99
  },
  { 
    name: "Wedding Expo",
    date: "2023-11-12",
    venue: "Luxury Hotel",
    capacity: 300,
    type: "Exhibition",
    price: 25.00
  },
  { 
    name: "Charity Gala Dinner",
    date: "2023-12-01",
    venue: "Grand Ballroom",
    capacity: 200,
    type: "Gala",
    price: 199.99
  }
];



const eventContainer = document.getElementById("eventDiv");
let clutter = ''

events.forEach(function () {
 
})











const flowerContainer = document.getElementById("flowerDiv");
let clutter = "";







flowers.forEach(function (flv) {
  clutter += `<h1 style="color:${flv.color}">Name of the flower is ${flv.name}</h1>
  <p>price is ${flv.price}</p>
  <ul>
   <li>${flv.type}</li>
  </ul>
  `;
});

flowerContainer.innerHTML = clutter;



