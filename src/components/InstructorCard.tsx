import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
const instructorInfo = {
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Robert Anderson",
  headline: "Senior UIUX Designer at Microsoft",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis euismod tellus etiam potenti.",
};

const InstructorCard = () => {
  return (
    <div className="flex flex-col bg-white p-6 gap-4 rounded-md ">
      <div className="flex justify-between flex-col lg:flex-row gap-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={instructorInfo.avatar} alt="user avatar" />
            <AvatarFallback>
              <Image src={instructorInfo.avatar} alt="user avatar" width={400} height={400} className="rounded-full" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{instructorInfo.name}</h3>
            <p className="text-gray-700 text-sm ">{instructorInfo.headline}</p>
          </div>
        </div>
        <Button variant={"outline"} className="border-primary text-primary hover:text-white hover:bg-primary">View Profile</Button>
      </div>

      <p className="text-gray-500 text-sm leading-5 max-w-full">{instructorInfo.summary}</p>
    </div>
  );
};

export default InstructorCard;
