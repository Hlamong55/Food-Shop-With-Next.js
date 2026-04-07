export default function ReviewCardSkeleton() {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-5 min-h-70 flex flex-col justify-between animate-pulse">

      {/* TOP CONTENT */}
      <div className="space-y-4">

        {/* USER INFO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>

          <div className="space-y-2">
            <div className="w-24 h-3 bg-gray-300 rounded"></div>
            <div className="w-16 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* RATING */}
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* REVIEW TEXT */}
        <div className="space-y-2">
          <div className="w-full h-3 bg-gray-300 rounded"></div>
          <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
          <div className="w-4/6 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* LIKE BUTTON */}
      <div className="w-24 h-4 bg-gray-300 rounded mt-3"></div>
    </div>
  );
}