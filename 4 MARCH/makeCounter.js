function makeCounter(initialValue = 0) {
  let count = initialValue;
  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }
  function reset() {
    count = initialValue;
    return count;
  }
  return {
    increment,
    decrement,
    reset,
  };
}

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
