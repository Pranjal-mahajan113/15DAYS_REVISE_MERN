function fetchuser() {
  return new Promise((resolve, reject) => {
    resolve("Users Data...");
  });
}
function fetchProducts() {
  return new Promise((resolve, reject) => {
    reject("Products Error...");
  });
}
function fetchCart() {
  return new Promise((resolve, reject) => {
    resolve("Carts Data....");
  });
}
// ! Promise.all([fetchuser(), fetchProducts(), fetchCart()])
//   .then(([users, products, cart]) => {
//     console.log(users);
//     console.log(products);
//     console.log(cart);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
Promise.allSettled([fetchuser(), fetchProducts(), fetchCart()]).then(
  (result) => {
    console.log(result);
  },
);
