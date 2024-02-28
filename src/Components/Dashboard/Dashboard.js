import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../Hook/useProduct";
import ProductDetails from "../Detail/ProductDetails";

const Dashboard = () => {
  const [products,setProducts] = useProduct();
  const handleDelate = id =>{
    const proceed = window.confirm('Are You Sure Delate This ???')
    if(proceed){
        const url = `http://localhost:7000/product/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = products.filter(student => student._id !== id);
            setProducts(remaining);

        })
    }
}
  return (
    <div>
      <h1 className="text-2xl">All Product : {products.length}</h1>

      <div class="overflow-x-auto w-full">
        <table class="table w-3/4 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>  
            </tr>
          </thead>
          <tbody>
            {
                products.map((product)=>(
                    <ProductDetails
                    key={product._id}
                    product={product}
                    handleDelate={handleDelate}
                    ></ProductDetails>
                ))
            }
          </tbody>
        </table>
      </div>
      <div className="text-center mt-10">
        <Link to="/add">
          <button className="btn btn-outline btn-success w-36">
            Add Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
