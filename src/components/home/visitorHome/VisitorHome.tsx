import { Hero, CoursesCategory, RecomendationCourses, WhyUs, Reviews, AllNews, HomeBanner } from "@/components/index";

const VisitorHome = () => {
  return (
    <>
      <section className="px-6 md:px-16 pb-8 md:py-10">
        <div className="container mx-auto space-y-6 flex flex-col-reverse md:flex-row justify-evenly items-center gap-12 ">
          <Hero />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <CoursesCategory />
        </div>
      </section>

      <section className=" px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <RecomendationCourses />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <WhyUs />
        </div>
      </section>

      <section className="px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Reviews />
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
