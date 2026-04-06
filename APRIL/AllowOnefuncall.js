var once = function(fn) {
  let called = false;

  return function(...args) {
    if (called === false) {
      called = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};
const onceFn = once((a, b, c) => a + b + c);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 4)); // undefined