// function reverseNumber(n) {
//   let rev = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = Math.floor(n / 10);
//   }
//   return rev;
// }
// console.log(reverseNumber(1234));

//Q2.factroial
// function factroial(fact) {
//   let FactCalculate = 1;
//   for (let i = 1; i <= fact; i++) {
//     FactCalculate *= i;
//   }
//   return FactCalculate;
// }
// console.log(factroial(5));

//Q3.Sum of digits
// function Sum(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(Sum(1234));

// function reverseNumber(num) {
//   let sum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sum = sum + digit;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// console.log(reverseNumber(12345));

function countDIgits(num) {
  let count = 0;
  while (num > 0) {
    let digit = num % 10;
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
console.log(countDIgits(12345));
