// function sumOfArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(sumOfArray([1, 2, 3, 4, 5]));

// function countEvenNumber(arr2) {
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//       count++;
//       sum = sum + arr2[i];
//     }
//   }
//   return [count, sum];
// }
// console.log(countEvenNumber([1, 2, 3, 4, 5, 6]));

// function MaxNumberArray(arr3) {
//   let max = arr3[0];
//   for (let i = 1; i < arr3.length; i++) {
//     if (arr3[i] > max) {
//       max = arr3[i];
//     }
//   }
//   return max;
// }
// console.log(MaxNumberArray([12, 5, 89, 34, 67]));

// function MinNumberArray(arr4) {
//   let min = arr4[0];
//   for (let i = 1; i < arr4.length; i++) {
//     if (arr4[i] < min) {
//       min = arr4[i];
//     }
//   }
//   return min;
// }
// console.log(MinNumberArray([12, 5, 89, 34, 67]));

// function searchElement(arr, target) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return" Found";
//         }
//     }
//     return "Not found"

// }
// console.log(searchElement([10, 20, 30, 40, 50],99))

// function countFrequency(arr, target) {
//   let count = 0;

//   // code here
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countFrequency([1, 2, 2, 3, 2, 4], 2));

function countFrequencyWithFilter(arr, target) {
  return arr.filter((item) => item === target).length;
}
console.log(countFrequencyWithFilter([1, 2, 2, 3, 2, 4], 2));

function CountFrequency(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }
      return frequency;

}
console.log(CountFrequency([1, 2, 2, 3, 1, 2]));
