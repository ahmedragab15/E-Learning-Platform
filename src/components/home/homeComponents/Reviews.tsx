import React from "react";
import ReviewCard from "./ReviewCard";
import {ArrowNavigation} from "@/components/shared/ArrowNavigation";
import Heading from "@/components/shared/Heading";
import { reviews } from "@/dummyData";

const Reviews = () => {
  return (
    <>
      <Heading title="What our students say" description="Find out what experiences and what they have to say about the course with us" />
      <div className="space-y-4">
        <div className="flex justify-evenly flex-wrap gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <ArrowNavigation />
      </div>
    </>
  );
};

export default Reviews;
