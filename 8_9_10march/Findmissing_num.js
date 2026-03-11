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

//2.using Reduce + sum of number formula==========================
function findMissing2(nums2) {
  // array length
  let n = nums2.length;

  // expected sum (0 se n)
  let expected = (n * (n + 1)) / 2;

  // reduce se array ka sum
  let actual = nums2.reduce((sum, num) => sum + num, 0);

  // difference hi missing number hai
  return expected - actual;
}


console.log("Reduce Method:", findMissing2([0,3,1]));