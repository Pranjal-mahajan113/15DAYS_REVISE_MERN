function largestnum(arr) {
  if (!Array.isArray(arr)) return false;

  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
      return false;
    }
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestnum([3, 1, 2]));
console.log(largestnum([-5, 2, -3, 4]));
console.log(largestnum([0, 2, 3]));
console.log(largestnum([]));
