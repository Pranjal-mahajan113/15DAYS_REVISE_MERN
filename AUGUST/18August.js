function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5]));

function countEvenNumber(arr2) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
      count++;
      sum = sum + arr2[i];
    }
  }
  return [count, sum];
}
console.log(countEvenNumber([1, 2, 3, 4, 5, 6]));

function MaxNumberArray(arr3) {
  let max = arr3[0];
  for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > max) {
      max = arr3[i];
    }
  }
  return max;
}
console.log(MaxNumberArray([12, 5, 89, 34, 67]));

function MinNumberArray(arr4) {
  let min = arr4[0];
  for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] < min) {
      min = arr4[i];
    }
  }
  return min;
}
console.log(MinNumberArray([12, 5, 89, 34, 67]));
