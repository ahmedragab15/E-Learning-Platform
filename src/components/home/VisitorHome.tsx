import { HeroVisitor, CoursesCategories, Courses, WhyUs, Reviews, AllNews, HomeBanner } from "@/components/index";
import {ArrowNavigation} from "@/components/shared/ArrowNavigation";
import Heading from "@/components/shared/Heading";

const VisitorHome = () => {
  return (
    <>
      <section className="px-6 md:px-16 pb-8 md:py-10">
        <div className="container mx-auto space-y-6 flex flex-col-reverse md:flex-row justify-evenly items-center gap-12 ">
          <HeroVisitor />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <CoursesCategories heading={<Heading title="Courses Category" cta={<ArrowNavigation />} />} />
        </div>
      </section>

      <section className=" px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Courses
            heading={
              <Heading
                title="Recomendation Courses"
                description="You can find recomendation courses from all course categories and quickly learn more"
              />
            }
            navigation={<ArrowNavigation />}
          />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <WhyUs />
        </div>
      </section>

      <section className="px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Reviews
            heading={
              <Heading title="What our students say" description="Find out what experiences and what they have to say about the course with us" />
            }
            navigation={<ArrowNavigation />}
          />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6">
          <AllNews />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6">
          <HomeBanner />
        </div>
      </section>
    </>
  );
};

export default VisitorHome;
