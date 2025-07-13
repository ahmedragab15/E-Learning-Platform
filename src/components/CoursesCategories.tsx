import { getCategories, getCourses } from "@/actions/courseActions";
import CategoryCard from "./CategoryCard";
import CourseCard from "./CourseCard";
import { ArrowNavigation } from "@/components/shared/ArrowNavigation";
import {  isUser } from "@/dummyData";

interface Props {
  searchParams?: { category?: string };
  heading: React.ReactNode;
  navigation?: React.ReactNode;
}

const CoursesCategories = async ({ heading, navigation = <ArrowNavigation />, searchParams }: Props) => {
    const categories = await getCategories();
    const allCourses = await getCourses();
    const selectedCategory = searchParams?.category || categories[0].title; 

  return (
    <>
      {heading}
      <div className="flex justify-evenly flex-wrap gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} selectedCategory={selectedCategory} />
        ))}
      </div>

      {isUser && (
        <>
          <div className="flex justify-evenly flex-wrap gap-6 my-6">
            {allCourses
              .filter((course) => course.category.title === selectedCategory)
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
