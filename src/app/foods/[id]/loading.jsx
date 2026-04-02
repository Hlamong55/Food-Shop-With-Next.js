export default function Loading() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto animate-pulse">

        {/* Back button skeleton */}
        <div className="h-4 w-32 bg-gray-300 rounded mb-6"></div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-6">

          {/* IMAGE */}
          <div className="w-full h-87.5 bg-gray-300 rounded-xl"></div>

          {/* CONTENT */}
          <div className="space-y-4">

            {/* Title */}
            <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

            {/* Category badges */}
            <div className="flex gap-3">
              <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
            </div>

            {/* Price */}
            <div className="h-8 w-24 bg-gray-300 rounded"></div>

            {/* Description lines */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
            </div>

            {/* Button */}
            <div className="h-12 w-full bg-gray-300 rounded-lg mt-6"></div>
          </div>
        </div>

        {/* VIDEO SKELETON */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mt-10">
          <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>
          <div className="aspect-video bg-gray-300 rounded-xl"></div>
        </div>

      </div>
    </div>
  );
}