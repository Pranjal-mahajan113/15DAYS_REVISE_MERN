function factorial(num) {
  if (typeof num !== "number") return false;
  if (!Number.isInteger(num)) return false;
  if (num < 0) return false;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = i * fact;
  }
  return fact;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(6));
console.log(factorial(1));
console.log(factorial(10));
console.log(factorial(-1));
