function outer() {
  console.log("Outer called");

  return function () {
    console.log("Inner called");
  };
}

const x = outer();
x();