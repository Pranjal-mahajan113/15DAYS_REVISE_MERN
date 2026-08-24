function MinimumArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(MinimumArray([1, 2, 3, 4, 5, 6]));

// !Second Larget
function SecondLarget(arr) {
  let second = -Infinity;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] < max) {
      second = arr[i];
    }
  }
  return second;
}
console.log(SecondLarget([1, 2, 3, 4, 56]));

function CountFrequency(arr){
    let frequency= {};
    for(let i=0;i<arr.length;i++){
        if(frequency[arr[i]]){
            frequency[arr[i]]++;
        }
        else {
            frequency[arr[i]]=1;
        }
    }
return frequency;
}
console.log(CountFrequency([1,1,2,4,3,1,3,4,5]))
