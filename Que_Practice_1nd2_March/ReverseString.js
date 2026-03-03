function reverseString(str) {
  let reserverd = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reserverd += str[i];
  }
  return reserverd;
}
console.log(reverseString("kl"));
