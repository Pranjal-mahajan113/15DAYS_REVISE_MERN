function reverseWords(sentence) {
  return sentence.split(" ").map((word) => word.split("").reverse().join(""));
}
console.log(reverseWords("Code js"));
