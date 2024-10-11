// factorial of number
// zero factorial is zero  // one factorial is 1
// for calculating a factorial of a number we need to check whether the num is zero or
function factorial(num) {
  if (num == 1 || num == 0) {
     
  } else {
    factorial = num * (num - 1);
  }
}

let num = prompt("Enter a number");

window.alert(`factorial is ${factorial(num)}`);


function factorial(n) {
  if (n === 0 || n === 1) {
  } else {
    return n * factorial(n - 1);
  }
}

let number = prompt("Enter a number:");
console.log(`Factorial of ${number} is ${factorial(number)}`);
