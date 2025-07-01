import React from "react";
import ReviewCard from "./ReviewCard";
import { MoveLeft, MoveRight } from "lucide-react";

const reviews: IReview[] = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of London",
    rating: "4.5",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    name: "John Doe",
    avatar:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of London",
    rating: "4.5",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of London",
    rating: "3.5",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

const Reviews = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold max-w-96">What our students say</h2>
      <p className="text-gray-600 max-w-96 leading-tight">Find out what experiences and what they have to say about the course with us</p>
      <div>
      <div className="flex justify-evenly flex-wrap gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
            <div className="flex gap-4 justify-center mt-4">
              <MoveLeft />
              <MoveRight />
            </div>
      </div>
    </>
  );
};

export default Reviews;
