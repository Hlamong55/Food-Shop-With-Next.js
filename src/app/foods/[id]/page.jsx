import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-semibold text-gray-600">
          Food Not Available
        </h2>
      </div>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back */}
      <a href="/foods" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Foods
      </a>

      <div className="bg-white shadow-md rounded-xl p-6 border">
        {/* Food Image */}
        <img
          src={foodImg}
          alt={title}
          className="w-full h-80 object-cover rounded-lg"
        />

        {/* Title + Category */}
        <h1 className="text-3xl font-bold mt-6">{title}</h1>

        <div className="flex items-center gap-4 mt-2 text-gray-600">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Category: {category}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Area: {area}
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-semibold text-green-600 mt-4">
          ৳ {price}
        </p>

        {/* Description Placeholder */}
        <p className="text-gray-700 mt-4 leading-relaxed">
          This delicious {title} is a perfect {category} dish inspired from
          authentic {area} flavors. Enjoy a rich taste and premium quality
          ingredients carefully selected to give you the best experience.
        </p>

        {/* Add to Cart Button */}
        <button
          className="mt-6 w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg text-lg"
        >
          Add to Cart
        </button>

        {/* YouTube Video */}
        {video && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Recipe Video</h2>
            <div className="aspect-video">
              <iframe
                src={video.replace("watch?v=", "embed/")}
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