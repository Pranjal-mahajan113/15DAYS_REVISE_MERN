"use strict";
//this in global space
console.log(this);

//this inside fuction
function x() {
  console.log(this); //undefined -->strict mode
}
x();
window.x();

//This inside object
const obj = {
  a: 10,
  x: function () {
    console.log(this.a);
  },
};
obj.x();

const student = {
  name: "Pranjal",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Bhumika",
};
student.printName.call(student2); //Student 2-->Bhumika

// !This inside arrow function
const obj3 = {
  b: 10,
  x: () => {
    console.log(this); //-->Window-->enclosed in lexical context
  },
};
obj3.x();

// ===================================
const obj4 = {
  c: 30,
  y: function () {
    //enclosing lexical context
    const z = () => {
      console.log(this);
    };
    z();
  },
};
obj4.y();


//This inside DOM elemenst => refernce to HTMLelement