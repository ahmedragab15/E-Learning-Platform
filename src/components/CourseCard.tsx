import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type CourseCardProps = {
  course: ICourse;
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link href={`/all-courses/${course.slug}?id=${course.id}`}>
      <div className="flex flex-col bg-slate-100 w-64 pb-6 gap-4 rounded-md shadow hover:shadow-xl duration-200">
        <Image src={course.image} alt="course image" width={400} height={400} className="rounded-md" />
        <div className="space-y-2 px-4">
          <Badge className={` text-white ${course.badgeBg}`}>{course.category}</Badge>
          <h3 className="font-medium">{course.title}</h3>
          <p className="text-gray-600 text-xs">{course.duration}</p>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: Number(Math.ceil(Number(course.ratingCount))) }).map((_, index) => (
              <Star key={index} fill="#dd7621" size={18} className="text-transparent " />
            ))}
            {Array.from({ length: 5 - Number(Math.ceil(Number(course.ratingCount))) }).map((_, index) => (
              <Star key={index} fill="#bababa" size={18} className="text-transparent " />
            ))}
            <p className=" text-xs">
              {course.ratingCount}
              <span className="text-gray-600"> ({course.ratingTotal})</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Button>Join Course</Button>
            <strong>${course.price}</strong>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
