var map = function(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }

  return result;
};
console.log(map([2,3,1], (n) => n + 1));