import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
type ReviewCardProps = {
  review: IReview;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="flex flex-col bg-white w-96 p-6 gap-4 rounded-md shadow hover:shadow-xl duration-200">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={review.avatar} alt="user avatar" />
          <AvatarFallback>
            <Image src={review.avatar} alt="user avatar" width={400} height={400} className="rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{review.name}</h3>
          <p className="text-gray-700 text-sm">{review.university}</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-5">{review.review}</p>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: Number(Math.ceil(Number(review.rating))) }).map((_, index) => (
          <Star key={index} fill="#fbbf24" size={18} className="text-transparent " />
        ))}
        {Array.from({ length: 5 - Number(Math.ceil(Number(review.rating))) }).map((_, index) => (
          <Star key={index} fill="#bababa" size={18} className="text-transparent " />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
