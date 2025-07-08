import CourseCard from "./CourseCard";

const Courses = ({ heading, navigation = "", courses }: { heading: React.ReactNode; navigation?: React.ReactNode; courses: ICourse[] }) => {
  return (
    <>
      {heading}
      <div className="flex justify-evenly flex-wrap gap-6 my-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {navigation}
    </>
  );
};

export default Courses;
