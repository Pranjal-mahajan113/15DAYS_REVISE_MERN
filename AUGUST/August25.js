// function findDuplicate(arr) {
//   let seen = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (seen.includes(arr[i])) {
//       return arr[i];
//     } else {
//       seen.push(arr[i]);
//     }
//   }
// }
// console.log(findDuplicate([1, 3, 4, 2, 2, 6]));

function TwoSum(arr2, target) {
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[i] + arr2[j] === target) {
        return [arr2[i], arr2[j]];
      }
    }
  }
}
console.log(TwoSum([2, 7, 11, 15], 9));

function moveZeroes(arr) {
  let pos = 0;

  // Non-zero elements ko front mein lao
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }

  // Bachi hui positions mein zero bhar do
  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }

  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
