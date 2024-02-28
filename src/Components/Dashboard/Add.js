import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'
const Add = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    const url = `http://localhost:7000/product`;
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);
    formData.append('image', data.image[0]); // Assuming image is a file input

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const result = await response.json();
      console.log(result);
      alert("Products Added SuccessFully")
      navigate('/all');
      event.target.reset();
    } catch (error) {
      console.error('Error:', error);
      // Handle error here
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-white">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                {...register("name")}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="image" className="mb-3 block text-base font-medium text-white">
                Image
              </label>
              <input
                type="file"
                name="image"
                {...register("image")}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="price" className="mb-3 block text-base font-medium text-white">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter your Price"
                {...register("price")}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="description" className="mb-3 block text-base font-medium text-white">
                Description
              </label>
              <textarea
                rows="4"
                name="description"
                placeholder="Type your Description"
                {...register("description")}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
