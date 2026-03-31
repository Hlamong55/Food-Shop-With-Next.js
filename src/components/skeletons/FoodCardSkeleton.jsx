export const FoodCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-lg"></div>

      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        <div className="h-5 bg-gray-300 rounded w-1/4"></div>

        <div className="flex gap-3 mt-4">
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};