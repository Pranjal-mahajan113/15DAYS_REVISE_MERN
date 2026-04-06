var memoize = function (fn) {
  let cache = {};
  return function (...args) {
    let key = args.join(",");
    if (key in cache) {
      return cache[key];
    }
    let result = fn(...args);
    cache[key] = result;
    return result;
  };
};
const memo = memoize((n) => n * 2);

console.log(memo(5));
console.log(memo(5));