import { getCoursesAction } from "@/actions/courseActions";
import { Courses, Heading, Container } from "@/components";
import CoursesFilter from "./CoursesFilter";
import PaginationComponent from "@/components/shared/PaginationComponent";

export default async function AllCourses(Props: { searchParams: { category?: string; page?: string } }) {
  const selectedCategory = (await Props.searchParams).category || "All";
  const allCourses = await getCoursesAction();
  const filteredCourses = selectedCategory === "All" ? allCourses : allCourses.filter((course) => course.category.title === selectedCategory);
  const allCategories = ["All", ...new Set(allCourses.map((course) => course.category.title))];

  // Pagination
  const COURSES_PER_PAGE = 10;
  const CURRENT_PAGE = Number((await Props.searchParams).page) || 1;
  const coursesLength = filteredCourses.length;
  const pages = Math.ceil(coursesLength / COURSES_PER_PAGE);
  const start = (CURRENT_PAGE - 1) * COURSES_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(start, start + COURSES_PER_PAGE);

  return (
    <>
      <Container>
        <Courses
          heading={<Heading title={`${selectedCategory} Courses`} cta={<CoursesFilter selected={selectedCategory} options={allCategories} />} />}
          courses={paginatedCourses}
        />
        <PaginationComponent pages={pages} currentPage={CURRENT_PAGE} category={selectedCategory} />
      </Container>
    </>
  );
}
