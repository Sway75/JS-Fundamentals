// Get the first argument and cast it to an integer
const n = parseInt(process.argv[2]);

// Recursive function to compute factorial
function factorial(num) {
  if (isNaN(num) || num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Print the factorial
console.log(factorial(n));
