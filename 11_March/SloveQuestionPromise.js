function UserLog() {
  return new Promise((resolve, reject) => {
    let user = true; // false
    console.log("Loading....");
    setTimeout(() => {
      if (user) {
        resolve("User is Logged In");
      } else {
        reject("User is not logged in");
      }
    }, 2000);
  });
}
UserLog()
  .then((Userinfo) => {
    console.log(Userinfo);
  })
  .catch((err) => {
    console.log(err);
  });
