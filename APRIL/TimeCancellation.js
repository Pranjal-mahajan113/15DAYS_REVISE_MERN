//delay → setTimeout
// cancel → clearTimeout
var cancellable = function (fn, args, t) {
  let timerId = setTimeout(() => {
    fn(...args);
  }, t);
  return function cancelFn() {
    clearTimeout(timerId);
  };
};
const cancelFn = cancellable((x) => x * 5, [2], 100);
setTimeout(cancelFn, 50);
