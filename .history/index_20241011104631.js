var events = [
  {
    name: "Tech Conference 2023",
    date: "2023-09-15",
    venue: "Convention Center",
    capacity: 500,
    type: "Conference",
    price: 299.99,
  },
  {
    name: "Summer Music Festival",
    date: "2023-07-22",
    venue: "Central Park",
    capacity: 10000,
    type: "Festival",
    price: 89.99,
  },
  {
    name: "Corporate Team Building",
    date: "2023-10-05",
    venue: "Adventure Park",
    capacity: 50,
    type: "Workshop",
    price: 149.99,
  },
  {
    name: "Wedding Expo",
    date: "2023-11-12",
    venue: "Luxury Hotel",
    capacity: 300,
    type: "Exhibition",
    price: 25.0,
  },
  {
    name: "Charity Gala Dinner",
    date: "2023-12-01",
    venue: "Grand Ballroom",
    capacity: 200,
    type: "Gala",
    price: 199.99,
  },
];

const eventContainer = document.getElementById("eventDiv");
let flutter = "";

events.forEach(function (ev) {
  flutter += `<h1>${ev.name}</h1>
   <p>$</p>
`;
});

eventContainer.innerHTML = flutter;
