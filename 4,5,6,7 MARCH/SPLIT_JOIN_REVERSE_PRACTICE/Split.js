let str1 = "Hello World";
let result = str1.split(" ");
// console.log(result);

let str2 = "Hello";
let result2 = str2.split("");
// console.log(result2);

let data = "apple,banana,mango";
let result3 = data.split(",");
// console.log(result3);

let str = "a b c d";
// console.log(str.split(" ", 2));

//====================================================================
//reverse Example
let arr = [1, 2, 3, 4, 5];
let reverse = arr.reverse();
// console.log(arr);
// console.log(reverse);

//Reverse String
let str5 = "Pranjal Mahajan";
let split = str5.split("");
let reverse5 = split.reverse();
let join = reverse5.join("");
// console.log(split);
// console.log(reverse5);
// console.log(join);

let reverseStr = "Pranjal Mahajan";
let reverseResult = reverseStr.split("").reverse().join("");
console.log(reverseResult);

//JOIN ===========================================
let joinExmp = ["Hello","World"];
console.log(joinExmp.join(" "))


let arr2 = ["2026","03","07"];

console.log(arr2.join("-"));