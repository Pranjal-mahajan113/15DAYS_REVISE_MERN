function arrayOfSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(arrayOfSum([2, 4, 6, 8]));

// !Q2
function arrayMaximum(arr2) {
  let max = arr2[0];
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }
  return max;
}
console.log(arrayMaximum([5, 2, 9, 1, 7]));

// !Q3
function reversedArray(arr3) {
  let result = [];
  for (let i = arr3.length - 1; i > 0; i--) {
    result.push(arr3[i])
  }
  return result;
}
console.log(reversedArray([1, 2, 3, 4, 5, 6]));
