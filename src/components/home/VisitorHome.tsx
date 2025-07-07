import { HeroVisitor, CoursesCategories, Courses, WhyUs, Reviews, AllNews, Banner, Heading, Container } from "@/components/index";
import { ArrowNavigation } from "@/components/shared/ArrowNavigation";

const VisitorHome = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-evenly items-center gap-12">
          <HeroVisitor />
        </div>
      </Container>

      <Container background="bg-white">
        <CoursesCategories heading={<Heading title="Courses Category" cta={<ArrowNavigation />} />} />
      </Container>

      <Container>
        <Courses
          heading={
            <Heading
              title="Recomendation Courses"
              description="You can find recomendation courses from all course categories and quickly learn more"
            />
          }
          navigation={<ArrowNavigation />}
        />
      </Container>

      <Container background="bg-white">
        <WhyUs />
      </Container>

      <Container>
        <Reviews
          heading={
            <Heading title="What our students say" description="Find out what experiences and what they have to say about the course with us" />
          }
          navigation={<ArrowNavigation />}
        />
      </Container>

      <Container background="bg-white">
        <AllNews />
      </Container>

      <Container background="bg-white">
        <Banner
          image="home-banner-image"
          title="Prove it right now"
          description="What are you waiting for? let's join us and get new knowledge and prove it now"
        />
      </Container>
    </>
  );
};

export default VisitorHome;
