import React from "react";

const FoodCard = ({ food, onAddToCart, onViewDetails }) => {
  const { title, price, foodImg, category } = food;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition p-4">
      <img
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="mt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{category}</p>

        <div className="flex justify-between items-center mt-3">
          <span classname="text-xl font-bold">৳{price}</span>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => onAddToCart(food)}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={() => onViewDetails(food)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;