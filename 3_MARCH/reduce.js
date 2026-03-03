const arr = [5, 1, 3, 5, 7];
//sum or max
function findsum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  return sum;
}
console.log("TRADITIONAL WAY :- ", findsum(arr));

//USING REDUCE SAME-----------------------------------------

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log("USING REDUCE :-", output);

//FIND MAX------------------------------------------------------
function findmax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log("MAXIMUM NUMBER USING NORMAL METHOD:-", findmax(arr));

//FIND MAX USING REDUCE-----------------------------------------
// let arr2 = [-10, -20, -5];
const outputmax = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(outputmax);

