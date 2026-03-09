function sumArray(arr) {
  function helper(i) {
    if (i === arr.length) {
      return 0;
    }
    return arr[i] + helper(i + 1);
  }
  return helper(0);
}
console.log(sumArray([1, 2, 3, 4]));
