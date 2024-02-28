import React from "react";
import useOrder from "../Hook/useOrder";
import AllDetails from "../Detail/AllDetails";

const AllBid = () => {
  const [orders] = useOrder();
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">All Bids</h1>
      <div className="">
        <table className="w-3/5 mx-auto p-10 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="dark:bg-gray-700 text-xl">
              <th className="p-5">Bid List</th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-900 dark:border-gray-700 text-lg font-bold">
            {orders.map((order) => (
              <AllDetails key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBid;
