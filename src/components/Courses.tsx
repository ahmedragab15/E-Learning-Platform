import { cn } from "@/lib/utils";
import CourseCard from "./CourseCard";
import ProgressCourseCard from "./ProgressCourseCard";
import { Prisma } from "@/generated/prisma/client";

type CourseWithCategory = Prisma.CourseGetPayload<{
  include: { category: true };
}>;

type CourseCardProps = {
  heading?: React.ReactNode;
  navigation?: React.ReactNode;
  courses?: CourseWithCategory[];
  progressCourses?: IProgressCourse[];
  className?: string;
};

const Courses = ({ heading, navigation, courses, progressCourses, className = "" }: CourseCardProps) => {
  return (
    <>
      {heading}
      <div className={cn(`flex justify-evenly flex-wrap gap-6 my-6 ${className}`)}>
        {courses && courses.map((course) => <CourseCard key={course.slug} course={course} />)}
        {progressCourses && progressCourses.map((course) => <ProgressCourseCard key={course.id} course={course} />)}
      </div>
      {navigation && navigation}
    </>
  );
};

export default Courses;
