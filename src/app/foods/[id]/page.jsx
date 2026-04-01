import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const data = await res.json();
  return data?.details;  // FIXED
};

const Page = async ({ params }) => {
  const { id } = params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Food Not Available</        h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">

      <a href="/foods" className="text-blue-600 underline">
        ← Back to Foods
      </a>

      <div className="bg-white shadow-lg rounded-xl p-6 mt-5">

        {/* IMAGE */}
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-80 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6">{food.title}</h1>

        {/* CATEGORY + AREA */}
        <div className="flex gap-3 mt-3">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Category: {food.category}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Area: {food.area}
          </span>
        </div>

        {/* PRICE */}
        <p className="text-2xl font-semibold text-green-600 mt-4">
          ৳ {food.price}
        </p>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-700">
          This delicious {food.title} is crafted using premium ingredients
          and inspired by rich {food.area} culinary traditions.
        </p>

        {/* ADD TO CART */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white mt-6 py-3 rounded-lg text-lg">
          Add to Cart
        </button>

        {/* YOUTUBE VIDEO */}
        {food.video && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Recipe Video</h2>
            <div className="aspect-video">
              <iframe
                src={food.video.replace("watch?v=", "embed/")}
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;