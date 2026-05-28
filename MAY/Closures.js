// function x () {
//     var x=7;
//     function y () {
//         console.log(x);
//     }
//     return y;
// }
// var z = x();
// console.log(z)
// z();
function maximumNUm(arr) {
  let maxnum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxnum) {
        maxnum=arr[i]
    }

  }
  return maxnum;
}
console.log(maximumNUm([2, 3, 8]));
