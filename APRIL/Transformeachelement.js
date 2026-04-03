var map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }
  return result;
};
console.log(map([1, 2, 3], (n) => n + 1));
console.log(map([10, 20, 30], (n) => 42));
console.log(map([1, 2, 3], (n, i) => n + i));
