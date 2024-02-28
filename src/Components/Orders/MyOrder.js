import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import OrderDetails from "../Detail/OrderDetails";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:7000/orders/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  console.log(user.email);
  const email = user.email;
  const rest = orders.filter((product) => product.email === email);

  return (
    <div>
      <h1>My Orders {rest.length}</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-3/5 mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>

              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Pay Now
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderDetails
                key={order._id}
                order={order}
              ></OrderDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
