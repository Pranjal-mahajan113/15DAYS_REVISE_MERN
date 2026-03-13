function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve("Users Details...");
  });
}
function fetchproducts() {
  return new Promise((resolve, reject) => {
    resolve("Productsssss....");
  });
}
function fetchcart() {
  return new Promise((resolve, reject) => {
    resolve("carts details");
  });
}
Promise.all([fetchUser(), fetchproducts(), fetchcart()])
  .then(([users, products, carts]) => {
    console.log(users);
    console.log(products);
    console.log(carts);
  })
  .catch((err) => {
    console.log(err);
  });
