function findmissing(arr) {
  if (!Array.isArray(arr)) return false;
  let n = arr.length;
  for (let i = 0; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
console.log(findmissing([3, 0, 1]));
