const user = {
  name: "Pranjal",
  age: 40,
};
console.log(user["name"]);
// 3. OBJECT CREATE KARNE KE TARIKE
// Method 1 — Object Literal (MOST COMMON)
const person = {
  name: "Aman",
  age: 22,
};

// Most commonly objects are created using object literal syntax

// Method 2 — new Object()
const obj = new Object();

obj.name = "prsh";
obj.age = 20;
console.log(obj);

// Method 3 — Constructor Function
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Harsh", 20);
console.log(u1);
// Old way before classes.

// Method 4 — Class
class User1 {
  constructor(name) {
    this.name = name;
  }
}

const u2 = new User1("Harsh");

// REFERENCE TYPE CONCEPT

const obj1 = {
  person: "A",
};
const obj2 = obj1;
obj2.person ="B";
console.log(obj1.person);

