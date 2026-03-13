// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve({ id: 1, name: "Pranajl" });
//   });
// }
// function fetchPost(userId) {
//   return new Promise((resolve, reject) => {
//     resolve(["POST 1", "POST 2"]);
//   });
// }
// function fetchcommensts(postId) {
//   return new Promise((resolve) => {
//     resolve(["Comment 1", "Commenst 2"]);
//   });
// }
// fetchUser()
//   .then((user) => {
//     console.log(user);
//     return fetchPost(user.id);
//   })
//   .then((posts) => {
//     console.log("Posts :", posts);
//     return fetchcommensts(posts);
//   })
//   .then((Comment) => {
//     console.log("Comments", Comment);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function fetchUser() {
  return new Promise((resolve) => {
    resolve([
      { id: 1, name: "Ikea" },
      { id: 2, name: "GH" },
    ]);
  });
}
function fetchOrders(userId) {
  return new Promise((resolve) => {
    console.log("Fetching orders for user:", userId);
    resolve(["Order 1", "Order 2"]);
  });
}
function fetchOrderDetails(orderId) {
  return new Promise((resolve) => {
    console.log("Fetching details for:", orderId);
    resolve("Order successfully");
  });
}

// ! fetchUser()
//   .then((user) => {
//     console.log("User:", user);
//     return fetchOrders(user[1].id);
//   })
//   .then((orders) => {
//     console.log("Orders:", orders[1]);
//     return fetchOrderDetails(orders[1]);
//   })
//   .then((orderDetail) => {
//     console.log("Order Detail:", orderDetail);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getData() {
  try {
    const users = await fetchUser();

    const orders = await fetchOrders(users[0].id);

    const orderDetail = await fetchOrderDetails(orders[0]);
    console.log(orderDetail);
  } catch (err) {
    console.log(err);
  }
}
getData();
