import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type InstructorCardProps = {
  instructor: IInstructorInfo;
};

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  return (
    <div className="flex flex-col bg-white p-6 gap-4 rounded-md ">
      <div className="flex justify-between flex-col lg:flex-row gap-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={instructor.avatar} alt="user avatar" />
            <AvatarFallback>
              <Image src={instructor.avatar} alt="user avatar" width={400} height={400} className="rounded-full" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{instructor.name}</h3>
            <p className="text-gray-700 text-sm ">{instructor.headline}</p>
          </div>
        </div>
        <Button variant={"outline"}>
          <Link href={`/instructors/${instructor.slug}`}>View Profile</Link>
        </Button>
      </div>

      <p className="text-gray-500 text-sm leading-5 max-w-full">{instructor.summary}</p>
    </div>
  );
};

export default InstructorCard;
