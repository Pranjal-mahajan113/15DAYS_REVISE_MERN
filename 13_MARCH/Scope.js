function test() {
  let age = 22;
  console.log(age);
}

test();

// ! Scope chain
let a = 10;
function outer() {
  let b = 20;
  function inner() {
    console.log(a, b);
  }
  inner();
}
outer();

// inner()
// ↓
// outer()
// ↓
// global

// ! Closures
function counter () {
  let count=0;
 return function () {
    count++;
    console.log("Closures Example:",count)
  }
}
const c = counter();
c();//1
c();//2


// ! Event Loop
console.log("1")

setTimeout(()=>{
 console.log("2")
},0)

Promise.resolve().then(()=>{
 console.log("3")
})

Promise.resolve().then(()=>{
 console.log("4")
})

console.log("5")