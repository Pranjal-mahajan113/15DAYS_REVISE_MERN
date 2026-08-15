// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([4, 7, 2, 9, 1]));

function SecondLarget(arr) {
  let max = arr[0];
  let secondMax = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
console.log(SecondLarget([10, 5, 20, 8, 15]));
