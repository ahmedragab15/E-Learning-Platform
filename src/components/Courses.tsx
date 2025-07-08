import { cn } from "@/lib/utils";
import CourseCard from "./CourseCard";
import ProgressCourseCard from "./ProgressCourseCard";

const Courses = ({
  heading,
  navigation,
  courses,
  progressCourses,
  className = "",
}: {
  heading?: React.ReactNode;
  navigation?: React.ReactNode;
  courses?: ICourse[];
  progressCourses?: IProgressCourse[];
  className?: string;
}) => {
  return (
    <>
      {heading}
      <div className={cn(`flex justify-evenly flex-wrap gap-6 my-6 ${className}`)}>
        {courses && courses.map((course) => <CourseCard key={course.id} course={course} />)}
        {progressCourses && progressCourses.map((course) => <ProgressCourseCard key={course.id} course={course} />)}
      </div>
      {navigation && navigation}
    </>
  );
};

export default Courses;
