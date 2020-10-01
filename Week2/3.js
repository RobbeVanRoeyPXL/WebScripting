// Fibonnaci oneliner
// https://en.wikipedia.org/wiki/Fibonacci_sequence
const fibonnaci = number => number === 1 || number === 2 ? 1 : fibonnaci(number - 2) + fibonnaci(number - 1);

console.log(fibonnaci(18));
