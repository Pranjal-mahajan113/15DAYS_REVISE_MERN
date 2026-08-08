function sum(num) {
  let Sum = 0;
  for (let i = 0; i < num.length; i++) {
    Sum += num[i];
  }
  return Sum;
}
// console.log(sum([2, 3, 4, 5]));

// function Even(arr) {
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
//       even.push(arr[i]);
//     }
//   }
//   return even;
// }
// console.log(Even([1, 2, 3, 4, 5, 6]));

function reverse(str) {
  let numReverse = [];
  for (let i = str.length-1; i >= 0; i--) {
    numReverse.push(str[i]);
  }
  return numReverse;
}
console.log(reverse([1, 2, 3, 4]));
