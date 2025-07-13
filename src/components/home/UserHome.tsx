import { CoursesCategories, Courses, Heading, HeroUser, Container } from "@/components/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronNavigation } from "../shared/ArrowNavigation";
import { getCourses } from "@/actions/courseActions";

const UserHome = async() => {
  const allCourses = await getCourses();
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
                  <Link href="/">See All</Link>
                </Button>
              }
            />
          }
          navigation={<ChevronNavigation />}
        />
      </Container>

      <Container>
        <Courses
          courses={allCourses.slice(0, 4)}
          heading={
            <Heading
              title="Recomendation Courses"
              description="You can find recomendation courses from all course categories and quickly learn more"
            />
          }
          navigation={<ChevronNavigation />}
        />
      </Container>

      <Container background="bg-white">
        <Courses
          courses={allCourses.slice(0, 4)}
          heading={
            <Heading title="Popular Course" description="You can find recomendation courses from all course categories and quickly learn more" />
          }
          navigation={<ChevronNavigation />}
        />
      </Container>
    </>
  );
};

export default UserHome;
