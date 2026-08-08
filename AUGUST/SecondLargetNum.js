function secondLargest(arr) {
  let secondlarge = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>secondLargest){
        return secondLargest
    }
  }
}
console.log(secondLargest([5, 2, 8, 1, 8]));
