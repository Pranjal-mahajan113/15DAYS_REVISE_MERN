function findSmallest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;
  let min;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== "number" || !Number.isFinite(value)) return false;
    if (min === undefined || value < min) min = value;
  }
  return min;
}
console.log(findSmallest([1, 3, 8]));
