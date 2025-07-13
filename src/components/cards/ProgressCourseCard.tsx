import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RatingProgress from "../RatingProgress";
type CourseCardProps = {
  course: IProgressCourse;
};

const ProgressCourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link href={`/all-courses/${course.slug}?id=${course.id}`}>
      <div className="flex flex-col bg-slate-100 w-64 max-w-full pb-6 gap-4 rounded-md shadow hover:shadow-xl duration-200">
        <Image src={course.image} alt="course image" width={400} height={400} className="rounded-md max-w-full" />
        <div className="space-y-2 px-4">
          <Badge variant="outline" className="text-xs text-primary relative border-0 -ml-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span>{course.category}</span>
          </Badge>
          <h3 className="font-medium">{course.title}</h3>
          <div>
            <RatingProgress count={course.allLessons > 0 ? (course.finishedLessons / course.allLessons) * 100 : 0} className="h-2" />
            <span className="text-gray-600 text-xs">
              {course.finishedLessons}/{course.allLessons} Lessons
            </span>
          </div>
          <Button variant={"outline"}>
            <Link href={`/all-courses/${course.slug}?id=${course.id}`}>Continue</Link>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProgressCourseCard;
