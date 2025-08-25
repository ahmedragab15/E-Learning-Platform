import { getCoursesAction } from "@/actions/courseActions";
import { Courses, Heading, Container } from "@/components";
import CoursesFilter from "./CoursesFilter";

export default async function AllCourses(Props: {searchParams: { category?: string }}) {
  const allCourses = await getCoursesAction();
  const selectedCategory = (await Props.searchParams).category || "All";
  const filteredCourses = selectedCategory === "All" ? allCourses : allCourses.filter((course) => course.category.title === selectedCategory);
  const allCategories = ["All", ...new Set(allCourses.map((course) => course.category.title))];

  return (
    <>
      <Container>
        <Courses
          heading={<Heading title={`${selectedCategory} Courses`} cta={<CoursesFilter selected={selectedCategory} options={allCategories} />} />}
          courses={filteredCourses}
        />
      </Container>
    </>
  );
}
