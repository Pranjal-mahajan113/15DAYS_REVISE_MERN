var addTwoPromises = async function (promise1, promise2) {
  const val1 = await promise1;
  const val2 = await promise2;
  return val1 + val2;
};
let p1 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
let p2 = new Promise(resolve => setTimeout(() => resolve(5), 2000));

addTwoPromises(p1, p2)
  .then(result => {
    console.log(result); // 👉 7
  });