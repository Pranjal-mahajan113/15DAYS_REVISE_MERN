// function reverSedArray(arr) {
//   let reverSed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverSed.push(arr[i]);
//   }
//   return reverSed;
// }
// console.log(reverSedArray([1, 2, 3, 4, 5]));

// function reversedBulitFunction(arr2){
//     return arr2.reverse()
// }
// console.log(reversedBulitFunction([1,2,3,4,5]))
// 📅 19 August 2026 — Day 4

// Topic: Arrays — Next Level

// Reverse Array
// Check if Array is Sorted
// Second Largest Element
// Brute Force vs Optimized
// Edge Cases
// JavaScript Built-in methods where relevant

// function ReveserdArrayTwoPointer(arr){
//   let left=0;
//   let right=arr.length-1;
//   while(left<right){
//     [arr[left],arr[right]]=[arr[right],arr[left]]
//     left++;
//     right--
//   }
// return arr;
// }
// console.log(ReveserdArrayTwoPointer([1,2,3,4,5]))

// function isSorted(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted([1, 2, 3, 4, 5])); // true
// console.log(isSorted([1, 5, 3, 4])); // fals

function FindSecondLarget(arr) {
  let max = arr[0];
  let second = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] < max) {
      second = arr[i];
    }
  }
  return second;
}
console.log(FindSecondLarget([12, 5, 89, 34, 67]));
