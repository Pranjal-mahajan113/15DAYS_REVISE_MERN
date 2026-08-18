// function fibonacci(num) {
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i < num; i++) {
//     console.log(a)
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }
// fibonacci((7))

function palindrome(num) {
  let original = num;
  let rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  if (original === rev) {
    return "Its Palindorm";
  }
}

console.log(palindrome(121));

function sumOfevenDigit(EvenNUM) {
  let sum = 0;
  for (let i = 0; i < EvenNUM.length; i++) {
    if (EvenNUM[i] % 2 === 0) {
      sum = sum + EvenNUM[i];
    }
  }
  return sum;
}
console.log(sumOfevenDigit([1, 2, 3, 4, 5]));

// function sumOfEvenSimpleNumbers(number) {
//   let sum = 0;
//   let count=0;
//   while (number > 0) {
//     let digit = number % 10;
//     if (digit % 2 === 0) {
//       sum += digit;
//       count++
//     }
//     number = Math.floor(number / 10);
//   }
//   return [sum ,count];
// }
// console.log(sumOfEvenSimpleNumbers(12345));


function sumOfdigits(SumNumber){
  let sum=0;
while(SumNumber>0){
  let digit=SumNumber %10;
  sum=sum+digit
  SumNumber=Math.floor(SumNumber/10)
}
return sum;
}
console.log(sumOfdigits(12345))