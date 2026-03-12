function getUserdata() {
  return new Promise((resolve, reject) => {
    let datafetched = false;
    setTimeout(() => {
      if (datafetched) {
        console.log("User data is loading")
        resolve({ name: "pranjal", age: 23 });
      } else {
        reject("Failed to fetch user data");
      }
    }, 1000);
  });
}
getUserdata()
  .then((data) => {
    console.log("User", data);
  })
  .catch((err) => {
    console.log("Error", err);
  });
