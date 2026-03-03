// const numbers = [12, 34, 5, 8];
// const doubled = numbers.map((num) => {
//   return num * 2;
// });
// console.log(numbers)
// console.log(doubled)

const arr = [5, 1, 3, 5, 7];
function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);

//MAP TRICKY QUESTION======================================
const users = [
  { firstname: "Pranjal", lastname: "Mahajan", age: 26 },
  { firstname: "Kinjal", lastname: "Shah", age: 24 },
  { firstname: "Rohan", lastname: "Patel", age: 28 },
  { firstname: "Aditi", lastname: "Verma", age: 26 },
  { firstname: "Saurav", lastname: "Singh", age: 30 },
];
//FIND FISTNAME AND LASTNAME USERS
const output2 = users.map((x) => {
  return x.firstname + " " + x.lastname;
});
console.log(output2);


//FIND BASICALLY COUNT THE AGE OF PARTICULAR PERSON
const output3 = ((acc,curr)=>{
  


},{})
