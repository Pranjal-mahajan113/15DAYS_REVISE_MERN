async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    },millis);
  });
}
sleep(1000)
.then((result)=>{
    console.log(result)
})
