let createCounter = function (init) {

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
      init;
      return init;
    },
  };
};
console.log(createCounter(0).increment(3))