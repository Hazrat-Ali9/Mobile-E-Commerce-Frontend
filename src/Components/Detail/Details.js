import React from "react";
import { Link } from "react-router-dom";

const Details = ({ product }) => {
  const { name, price, image, _id } = product;
  const imageURL = `http://localhost:7000/images/${image}`;
  return (
    <div>
      <div className="drop-shadow-2xl ">
        <div className="max-w-sm text-center">
          <img
            className="rounded-lg border-solid border-2 border-sky-500"
            src={imageURL}
          alt={name}
          />
          <div className="p-5">
            <h5 className="mb-2  text-2xl font-medium tracking-tight">
              Name : {name}
            </h5>
            <h5 className="mb-2  text-2xl font-medium tracking-tight">
              Price : {price}
            </h5>

            <Link to={`/view/${_id}`}>
              <button
                type="button"
                class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
