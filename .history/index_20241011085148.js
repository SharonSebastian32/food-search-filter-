 
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let number = prompt("Enter a number:");
console.log(
  `${number} is ${isPrime(number) ? "a Prime" : "not a Prime"} number`
);
