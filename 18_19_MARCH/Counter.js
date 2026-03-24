let createCounter = function (init) {
    const original = init;

  return {
    increment: function () {
      init++;
      return init;
    },
    decrement: function () {
      init--;
      return init;
    },
    reset: function () {
      init=original;
      return init;

    },
  };
};
console.log(createCounter(5))
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());