function one() {
   console.log("1");

   two();

   console.log("2");
}

function two() {
   console.log("3");
}

one();

console.log("4");