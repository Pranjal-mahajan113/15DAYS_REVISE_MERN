// let arr = [1, 2, 3];
// let a = arr.forEach((item) => {
//   return item * 2;
// });
// console.log(arr);
// console.log(a);

// let arr = [2, 4, 5, 8];
// const ans = arr.reduce((acc, cuur) => {
//   return acc + cuur;
// }, 0);
// console.log(ans);

// const arr = [1,2,3];

// const ans = arr.map(num => num > 1);

// console.log(ans);

// const arr = [0,1,2,"",null,"hello"];

// const ans = arr.filter(Boolean);

// console.log(ans);
const arr = [1, 2, 3, 4];
const double = arr.map((num) => {
  return num * 2;
});

console.log(double);

const name = ["ram", "shyam"];
const uppercase = name.map((up) => {
  return up.toUpperCase();
});
console.log(uppercase);

const persons = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const each = persons.map((per) => {
  return per.name;
});
console.log(each);

const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter((num) => num % 2 == 0);
console.log(even);

const users = [
 {name:"A", active:true},
 {name:"B", active:false}
];
const user = users.map((eachperson)=>{
    return eachperson.active;

})
console.log(user)