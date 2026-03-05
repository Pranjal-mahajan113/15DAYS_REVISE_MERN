function countEvens(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
      return false;
    }
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvens([1, 2, 3, 4]));
console.log(countEvens([-2, -5, -8]));
console.log(countEvens([]));
