import React, { useEffect, useState } from 'react';

import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/product/${id}`);
        const productData = response.data;
        setName(productData.name);
        setDescription(productData.description);
        setPrice(productData.price);
        setExistingImage(productData.image);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (name) formData.append('name', name);
    if (description) formData.append('description', description);
    if (price) formData.append('price', price);
    if (image) formData.append('image', image);

    try {
      const response = await axios.put(`http://localhost:7000/product/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product updated successfully:', response.data);
      navigate("/all")
      alert("Product updated successfully")
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="mb-3 block text-base font-medium text-white">
        Name:
        <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="name" className="mb-3 block text-base font-medium text-white">
        Description:
        <textarea className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label htmlFor="name" className="mb-3 block text-base font-medium text-white">
        Price:
        <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label htmlFor="name" className="mb-3 block text-base font-medium text-white">
        Image:
        <input className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" type="submit">Update Product</button>
    </form>
      </div>
      </div>
    
    
  </div>
    );
};

export default Update;