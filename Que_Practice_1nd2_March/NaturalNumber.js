function sumN(n) {
  if (n < 0) return false;
  if (!Number.isInteger(n)) return false;
  if (typeof n !== "number") return false;

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = i + sum;
  }
  return sum;
}
console.log(sumN(5));
console.log(sumN(0));
console.log(sumN(1));
console.log(sumN(100));
console.log(sumN(-1));
console.log(sumN(2.5));
