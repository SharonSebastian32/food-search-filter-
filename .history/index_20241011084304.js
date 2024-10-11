// factorial of number
// zero factorial is zero  // one factorial is 1
// for calculating a factorial of a number we need to check whether the num is zero or

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let nm = prompt("Enter a number:");
alert(`Factorial of ${nm} is ${factorial(n)}`);
