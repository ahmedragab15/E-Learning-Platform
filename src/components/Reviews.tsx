import React from "react";
import ReviewCard from "./cards/ReviewCard";
import { getAllReviewsAction } from "@/actions/reviewsActions";

const Reviews = async({ heading, navigation = "" }: { heading: React.ReactNode; navigation?: React.ReactNode }) => {
  const reviews = await getAllReviewsAction()
  return (
    <>
      {heading}
      <div className="space-y-4">
        <div className="flex justify-evenly flex-wrap gap-6">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        {navigation}
      </div>
    </>
  );
};

export default Reviews;
