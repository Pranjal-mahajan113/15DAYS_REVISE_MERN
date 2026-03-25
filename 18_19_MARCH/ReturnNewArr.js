var map = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }

  return result;
};
console.log(map([2, 3, 1], (n) => n + 1));

function add(a, b) {
  return a + b;
}
console.log(add(3, 9));

const num = [1, 2, 3, 5];
const result = num.map((n) => n * 1);
console.log(result)
