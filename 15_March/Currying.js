// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(10,2,4))

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(10)(3)(2));
