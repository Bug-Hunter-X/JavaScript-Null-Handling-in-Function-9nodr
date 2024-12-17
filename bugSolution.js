function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 'Error: One or both inputs are null or undefined'; // Improved error handling
  }

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: Error: One or both inputs are null or undefined
console.log(foo(1, undefined)); // Output: Error: One or both inputs are null or undefined
console.log(foo(null, null)); // Output: Error: One or both inputs are null or undefined
console.log(foo(undefined, 2)); // Output: Error: One or both inputs are null or undefined