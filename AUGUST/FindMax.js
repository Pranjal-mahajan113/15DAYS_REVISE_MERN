// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([10, 5, 25, 8, 20]));
let arr = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  console.log(sum);
}
