import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const View = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const imageURL = products.image ? `http://localhost:7000/images/${products.image}` : '';
  useEffect(() => {
    const url = `http://localhost:7000/product/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-20">
        <figure>
          <img src={imageURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{products.name}</h2>
          <p>I{products.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/bid/${id}`}><button className="btn btn-primary">Bid Now</button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
