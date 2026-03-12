function countEvens(arr) {
  if (arr.length === 0) return 0;
  if (!Array.isArray(arr)) return false;
  
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}
console.log(countEvens([1, 2, 3, 4]));
console.log(countEvens([]));
