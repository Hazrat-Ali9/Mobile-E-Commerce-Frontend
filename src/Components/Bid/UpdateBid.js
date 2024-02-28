import React, { useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const UpdateBid = () => {
    const [price, setPrice] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:7000/orders/${id}`,
                { price }, // Send price directly as JSON object
                {
                    headers: {
                        "Content-Type": "application/json", // Set content type to JSON
                    },
                }
            );
            console.log("Bid updated successfully:", response.data);
            navigate("/allbid");
            alert("Bid Added SuccessFully");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form onSubmit={handleSubmit}>
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-white"
                        >
                            Price:
                            <input
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                        <button
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            type="submit"
                        >
                            Update Bid
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default UpdateBid;