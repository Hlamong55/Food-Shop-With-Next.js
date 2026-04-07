"use client";

import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  const [likes, setLikes] = useState(review.likes.length);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const date = new Date(review.date).toLocaleDateString();

  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-5 min-h-70 space-y-4">

      {/* USER INFO */}
      <div className="flex items-center gap-3">
        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold">{review.user}</h4>
          <p className="text-xs text-gray-700">{date}</p>
        </div>
      </div>

      {/* RATING */}
      <div className="flex gap-1 text-yellow-400">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* REVIEW TEXT */}
      <p className="text-gray-700 leading-relaxed">
        {review.review}
      </p>

      {/* LIKE BUTTON */}
      <button
        onClick={handleLike}
        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-red-500 transition"
      >
        <FaHeart className={liked ? "text-red-500" : ""} />
        {likes} Likes
      </button>
    </div>
  );
}