import { getCoursesAction } from "@/actions/courseActions";
import { Courses, Heading, Container } from "@/components";
import CoursesFilter from "./CoursesFilter";

interface Props {
  searchParams: { category?: string };
}
const AllCourses = async ({ searchParams }: Props) => {
  const allCourses = await getCoursesAction();
  const selectedCategory =  (await searchParams).category || "All";
  const filteredCourses = selectedCategory === "All" ? allCourses : allCourses.filter((course) => course.category.title === selectedCategory);

  return (
    <>
      <Container>
        <Courses
          heading={<Heading title={`${selectedCategory} Courses`} cta={<CoursesFilter selected={selectedCategory} />} />}
          courses={filteredCourses}
        />
      </Container>
    </>
  );
};

export default AllCourses;
