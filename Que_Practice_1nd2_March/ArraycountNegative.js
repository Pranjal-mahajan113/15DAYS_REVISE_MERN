function countNegatives(arr) {
  // 1️⃣ Check if input is array
  if (!Array.isArray(arr)) return false;

  // 2️⃣ Validate elements
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") return false;
    if (!Number.isFinite(arr[i])) return false;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(countNegatives([-2, -5, 4]));
console.log(countNegatives([3, -1, -8, 0, 5]));
console.log(countNegatives([3, -1, "5"]));
