//24 FEB 🚀🚀🚀🚀🚀

let a = "Hello wolrd";
console.log(a);

// ===================================
let b = 10;
let c = 20;
let d = b + c;
console.log(d);
// ===========================================================
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(40, 80));
console.log(sum(5, 3));
// ================================================================
function evenodd(num3) {
  if (num3 % 2 === 0) {
    console.log(`${num3} is even number`);
  } else {
    console.log(`${num3} is odd number`);
  }
}
evenodd(9);
evenodd(4);
//====================================================
function maxnum(input) {
  if (input.length === 0) {
    return null;
  }
  let max = input[0]; // assume first is max
  for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }
  return max;
}
console.log(maxnum([0, 7, 2, 9, 19]));
console.log(maxnum([100, 100, 100]));
console.log(maxnum([-10, -20, -3, -1]));
console.log(maxnum([42]));
console.log(maxnum([]));
console.log(maxnum([1,2,3,4,5]))

