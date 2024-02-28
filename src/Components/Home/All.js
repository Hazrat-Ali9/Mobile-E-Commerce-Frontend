import React from 'react';
import useProduct from '../Hook/useProduct';
import Details from '../Detail/Details';

const All = () => {
    const [products] = useProduct()
    return (
        <div>
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10">
        {products.map((product) => (
          <Details
          key={product._id}
          product = {product}
          ></Details>
        ))}
      </div>
        </div>
    );
};

export default All;