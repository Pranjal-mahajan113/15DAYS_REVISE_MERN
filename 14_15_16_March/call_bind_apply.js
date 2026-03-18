let name = {
  firstname: "Pranjal",
  lastname: "Mahajan",
  printFullname: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};
name.printFullname();

let name2 = {
  firstname: "vaishanvi",
  lastname: "mahajan",
};
name.printFullname.call(name2)