// function calc(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const memoize = () =>{

// }
// console.time()
// console.log(calc(5))
// console.timeEnd()


function memoSquare(){
  let cache = {};

  return function(n){
    if(cache[n]){
      console.log("From cache");
      return cache[n];
    } else {
      console.log("Calculating...");
      cache[n] = n * n;
      return cache[n];
    }
  }
}

const square = memoSquare();

console.log(square(5));
console.log(square(5));
console.log(square(2))