import { getCoursesAction } from "@/actions/courseActions";
import CategoryCard from "./cards/CategoryCard";
import CourseCard from "./cards/CourseCard";
import { headers } from "next/headers";
import { getCategoriesAction } from "@/actions/categoryActions";

interface Props {
  searchParams?: { category?: string };
  heading: React.ReactNode;
  navigation?: React.ReactNode;
}

const CoursesCategories = async ({ heading, navigation, searchParams }: Props) => {
  const categories = await getCategoriesAction();
  const allCourses = await getCoursesAction();

  const headersList = headers();
  const pathname = (await headersList).get("x-pathname");
  const selectedCategory = pathname === "/courses-category" ? searchParams?.category || categories[0].title : "All";

  return (
    <>
      {heading}
      <div className="flex justify-evenly flex-wrap gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} selectedCategory={selectedCategory} />
        ))}
      </div>

      {pathname === "/courses-category" && (
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
