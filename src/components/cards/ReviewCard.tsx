import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Prisma } from "@/generated/prisma/client";

type ReviewWithUser = Prisma.ReviewGetPayload<{
  include: { user: true; course: true };
}>;

type ReviewCardProps = {
  review: ReviewWithUser;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="flex flex-col bg-white max-w-96 p-6 gap-4 rounded-md shadow hover:shadow-xl duration-200">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={review.user.avatarUrl as string || "http://dergipark.org.tr/assets/app/images/buddy_sample.png"} alt="user avatar" />
          <AvatarFallback>
            <Image src={review.user.avatarUrl as string || "http://dergipark.org.tr/assets/app/images/buddy_sample.png"} alt="user avatar" width={400} height={400} className="rounded-full" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{review.user.fullname}</h3>
          <p className="text-gray-700 text-sm line-clamp-1">{review.user.university || "No University"}</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-5 line-clamp-4">{review.review}</p>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: Number(Math.ceil(Number(review.rating))) }).map((_, index) => (
          <Star key={index} fill="#dd7621" size={18} className="text-transparent " />
        ))}
        {Array.from({ length: 5 - Number(Math.ceil(Number(review.rating))) }).map((_, index) => (
          <Star key={index} fill="#bababa" size={18} className="text-transparent " />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
