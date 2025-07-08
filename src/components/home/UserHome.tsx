import { CoursesCategories, Courses, Heading, HeroUser, Container } from "@/components/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronNavigation } from "../shared/ArrowNavigation";
import { allCourses } from "@/dummyData";

const UserHome = () => {
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
                <Button variant="link" asChild>
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
          courses={allCourses}
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
          courses={allCourses}
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
