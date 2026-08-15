function PrimeNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return "Not prime";
    }
  }
  return "Its prime";
}
console.log(PrimeNum(7));
console.log(PrimeNum(2));
