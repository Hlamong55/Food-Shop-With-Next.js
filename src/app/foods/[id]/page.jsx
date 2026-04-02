import React from "react";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.details;
};

const Page = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold">Food Not Available</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <a
          href="/foods"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to Foods
        </a>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-10 p-5">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={food.foodImg}
              alt={food.title}
              className="w-full h-[350px] object-cover rounded-xl"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-between">

            <div>
              <h1 className="text-3xl font-bold">
                {food.title}
              </h1>

              {/* CATEGORY */}
              <div className="flex gap-3 mt-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {food.category}
                </span>

                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  {food.area}
                </span>
              </div>

              {/* PRICE */}
              <p className="text-3xl font-bold text-green-600 mt-5">
                ৳ {food.price}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-5 text-gray-600 leading-relaxed">
                This delicious <span className="font-semibold">{food.title}</span>{" "}
                is crafted using premium ingredients and inspired by rich{" "}
                {food.area} culinary traditions.
              </p>
            </div>

            {/* BUTTON */}
            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-medium transition">
              Add to Cart
            </button>

          </div>
        </div>

        {/* VIDEO SECTION */}
        {food.video && (
          <div className="bg-white shadow-xl rounded-2xl p-6 mt-10">
            <h2 className="text-2xl font-semibold mb-5">
              🎬 Recipe Video
            </h2>

            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src={food.video.replace("watch?v=", "embed/")}
                className="w-full h-full"
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