import React from "react";
import { Link } from "react-router-dom";

const OrderDetails = ({ order }) => {
  const {_id, productName, userName, email, prices} = order;
  if (!prices) {
    return null;
}
   const pricesArray = Object.entries(prices);
  return (
    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {productName}
      </th>
      <td class="px-6 py-4">
                {pricesArray.map(([key, value]) => (
                    <div key={key}>
                        {key}: {value}
                    </div>
                ))}
                </td>
      <td class="px-6 py-4">
        <Link to={`/bidupdate/${_id}`}>
          <button class="btn btn-xs">Update</button>
        </Link>
      </td>
    </tr>
  );
};

export default OrderDetails;
