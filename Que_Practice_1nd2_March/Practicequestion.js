function reverse(arr) {
  let reverserd = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverserd.push(arr[i]);
  }
  return reverserd;
}
console.log(reverse([5, 3, 8, 3, 1, 5, 9]));

//=======================================
function minmax(arr2) {
  let min = arr2[0];
  let max = arr2[0];
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < min) {
      min = arr2[i];
    }
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }
  return { max, min };
}
console.log(minmax([5, 3, 8, 3, 1, 5, 9]));
