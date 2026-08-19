// function reverSedArray(arr) {
//   let reverSed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverSed.push(arr[i]);
//   }
//   return reverSed;
// }
// console.log(reverSedArray([1, 2, 3, 4, 5]));

// function reversedBulitFunction(arr2){
//     return arr2.reverse()
// }
// console.log(reversedBulitFunction([1,2,3,4,5]))

function ReveserdArrayTwoPointer(arr){
  let left=0;
  let right=arr.length-1;
  while(left<right){
    [arr[left],arr[right]]=[arr[right],arr[left]]
    left++;
    right--
  }
return arr;
}
console.log(ReveserdArrayTwoPointer([1,2,3,4,5]))