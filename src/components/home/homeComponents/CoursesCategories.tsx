import CategoryCard from "./CategoryCard";
import CourseCard from "./CourseCard";
import { ArrowNavigation } from "@/components/shared/ArrowNavigation";
import { categories, courses, isUser, selectedCat } from "@/dummyData";

const CoursesCategories = ({ heading, navigation = <ArrowNavigation /> }: { heading: React.ReactNode; navigation?: React.ReactNode }) => {
  return (
    <>
      {heading}
      <div className="flex justify-evenly flex-wrap gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {isUser && (
        <>
          <div className="flex justify-evenly flex-wrap gap-6 my-6">
            {courses
              .filter((course) => course.category === selectedCat)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
          {navigation}
        </>
      )}
    </>
  );
};

export default CoursesCategories;
