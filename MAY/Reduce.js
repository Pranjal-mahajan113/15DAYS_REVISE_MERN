// ["a","b","a","c","b","a"]
const arr = ["a", "b", "a", "c", "b", "a"];
const ans = arr.reduce((acc, curr) => {
  //   acc[curr] = (acc[curr] || 0) + 1;
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});
console.log(ans);
