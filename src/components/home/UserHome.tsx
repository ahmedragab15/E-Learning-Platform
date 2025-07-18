import { CoursesCategories, Courses, Heading, HeroUser, Container } from "@/components/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronNavigation } from "../shared/ArrowNavigation";
import { getCoursesAction } from "@/actions/courseActions";

const UserHome = async () => {
  const allCourses = await getCoursesAction();
  return (
    <>
      <section className="userHome-Hero-image relative max-w-full h-[731px] px-6 md:px-16 pb-8 ">
        <HeroUser />
      </section>

      <Container background="bg-white">
        <CoursesCategories
          heading={
            <Heading
              title="Courses Category"
              cta={
                <Button variant="link">
                  <Link href="/courses-category">See All</Link>
                </Button>
              }
            />
          }
          navigation={<ChevronNavigation />}
        />
      </Container>

      <Container>
        <Courses
          id="recomendation"
          courses={allCourses.slice(0, 8)}
          heading={
            <Heading
              title="Recomendation Courses"
              description="You can find recomendation courses from all course categories and quickly learn more"
            />
          }
          navigation={<ChevronNavigation id="recomendation" />}
          swiper
        />
      </Container>

      <Container background="bg-white">
        <Courses
          id="popular"
          courses={allCourses.slice(10, 18)}
          heading={
            <Heading title="Popular Course" description="You can find recomendation courses from all course categories and quickly learn more" />
          }
          navigation={<ChevronNavigation id="popular" />}
          swiper
        />
      </Container>
    </>
  );
};

export default UserHome;
