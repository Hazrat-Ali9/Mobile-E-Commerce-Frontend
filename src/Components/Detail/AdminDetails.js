import React from 'react';

const AdminDetails = ({order}) => {
    const { productName, bids } = order;

    return (
      <tbody className="border-b dark:bg-gray-900 dark:border-gray-700 text-md">
      <tr>
          <td className="px-3 py-2">
              <p>{productName}</p>
          </td>
          {bids.map((bid,index)=>(
              <>
              <td key={index} className="px-3 py-2">
              <span>Name : {bid.userName}</span>
              
          </td>
          <td className="px-3 py-2">
          <span>Email : {bid.email}</span>
              
          </td>
         
              </>
              
          ))}
          
      </tr>
  </tbody>
    );
};

export default AdminDetails;