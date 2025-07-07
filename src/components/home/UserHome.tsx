import { CoursesCategories, Courses, Heading, HeroUser, Container } from "@/components/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ButtonArrowNavigation } from "../shared/ArrowNavigation";

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
          navigation={<ButtonArrowNavigation />}
        />
      </Container>

      <Container>
        <Courses
          heading={
            <Heading
              title="Recomendation Courses"
              description="You can find recomendation courses from all course categories and quickly learn more"
            />
          }
          navigation={<ButtonArrowNavigation />}
        />
      </Container>

      <Container background="bg-white">
        <Courses
          heading={
            <Heading title="Popular Course" description="You can find recomendation courses from all course categories and quickly learn more" />
          }
          navigation={<ButtonArrowNavigation />}
        />
      </Container>
    </>
  );
};

export default UserHome;
