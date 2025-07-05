import React from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/dummyData";


const Reviews = ({ heading, navigation = "" }: { heading: React.ReactNode; navigation?: React.ReactNode }) => {
  return (
    <>
      {heading}
      <div className="space-y-4">
        <div className="flex justify-evenly flex-wrap gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        {navigation}
      </div>
    </>
  );
};

export default Reviews;
