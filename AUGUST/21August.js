// function moveZero(arr) {
//   let result = [];
//   let ZeroCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       ZeroCount++;
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < ZeroCount; i++) {
//     result.push(0);
//   }
//   return result;
// }
// console.log(moveZero([0, 1, 0, 3, 13]));

function MoveZerowithTwoPointer(arr) {
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[left], arr[i]] = [arr[i], arr[left]];
      left++;
    }
  }
  return arr;
}
console.log(MoveZerowithTwoPointer([0, 1, 0, 3, 13]))
