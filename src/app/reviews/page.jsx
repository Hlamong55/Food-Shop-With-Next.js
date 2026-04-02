"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total Customer Reviews:{" "}
        <span className="text-yellow-500">{reviews.length}</span>
      </h2>

      <div className="grid my-5 grid-cols-4 gap-5">
        {reviews.map((rev) => (
          <ReviewCard
          review={rev}
          key={rev.id}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
