import CoursesCategory from "@/components/home/visitorHome/CoursesCategory";
import RecomendationCourses from "@/components/home/visitorHome/RecomendationCourses";
import Reviews from "@/components/home/visitorHome/Reviews";
import WhyUs from "@/components/home/visitorHome/WhyUs";
import Hero from "@/components/home/visitorHome/Hero";

const VisitorHome = () => {
  return (
    <>
      <section className="px-6 md:px-16 pb-8 md:py-10">
        <div className="container mx-auto space-y-6 flex flex-col-reverse md:flex-row justify-evenly items-center gap-12 ">
          <Hero />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6">
          <CoursesCategory />
        </div>
      </section>

      <section className=" px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6">
          <RecomendationCourses />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6">
          <WhyUs />
        </div>
      </section>

      <section className="px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6">
          <Reviews />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6"></div>
      </section>
    </>
  );
};

export default VisitorHome;
