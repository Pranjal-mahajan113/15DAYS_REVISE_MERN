var argumentsLength = function (...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count++;
  }
  return count;
};
console.log(argumentsLength(1, 2, 3));

var argumentsLength2 = function (...args) {
  return args.length;
};
console.log(argumentsLength2(5));
