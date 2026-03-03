function reverseArray(arr) {
  let reverserd = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverserd.push(arr[i]);
  }
  return reverserd;
}

console.log(reverseArray([1, 2, 3, 4]));
