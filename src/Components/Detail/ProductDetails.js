import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = ({ product, handleDelate }) => {
  const { _id, name, price } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <Link to={`/update/${_id}`}>
          <button class="btn btn-xs">Update</button>
        </Link>
      </td>
      <td class="px-6 py-4 gap-4">
        <button class="btn btn-xs" onClick={() => handleDelate(_id)}>
          Delate
        </button>
      </td>
    </tr>
  );
};

export default ProductDetails;
