let expect = function (val) {
  return {
    toBe: function (other) {
      if (val === other) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (other) {
      if (val !== other) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(10))
