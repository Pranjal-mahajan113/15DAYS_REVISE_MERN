//
// function reverseString(str) {
//   let reversed = " ";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("Pranjal"));

function maximumNumber(arr) {

  return Math.max(...arr)
}
console.log(maximumNumber([3, 7, 2, 9, 5]));
