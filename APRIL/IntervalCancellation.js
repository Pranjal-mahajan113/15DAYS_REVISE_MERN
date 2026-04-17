var cancellable = function (fn, args, t) {
  fn(...args);

  let intervalId = setInterval(() => {
    console.log(fn(...args));
  }, t);

  return function cancelFn() {
    clearInterval(intervalId);
  };
};
const cancelFn = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn, 100);
