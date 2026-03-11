//1.Name Uppercase============================================
const users = [
  { id: 1, name: "pranjal" },
  { id: 2, name: "rahul" },
  { id: 3, name: "neha" },
];
const upper = users.map((uppercase) => {
  return uppercase.name.toUpperCase();
});
console.log("1.Uppercase Name : ", upper);

//2.Filter question================================================
const numbers = [3, 8, 15, 20, 7, 10];
const even = numbers.filter((num) => {
  return num % 2 == 0;
});
console.log("2.Even Number : ", even);

//3.Reduce Question==================================================
const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 500 },
  { item: "Keyboard", price: 1500 },
];
const totalprice = cart.reduce((acc, cur) => {
  return (acc = acc + cur.price);
}, 0);
console.log("3.Total price",totalprice);


//4.Flatten Array =======================================
const arr = [1, 2, [3, 4], [5, 6]];

const flatArray = arr.flat();

console.log("4.Flatten Array:", flatArray);

//5
const students = [
  { name: "A", score: 45 },
  { name: "B", score: 75 },
  { name: "C", score: 90 },
  { name: "D", score: 50 }
];
const filterStudents = students.filter((student)=>{
  return student.score>60;

})