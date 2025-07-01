import React from "react";
import heroImage from "../../public/images/hero_image.png";
import whyUsImage from "../../public/images/why_us.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CoursesCategory from "@/components/home/CoursesCategory";
import RecomendationCourses from "@/components/home/RecomendationCourses";
import { Award, Headset, House } from "lucide-react";
import Reviews from "@/components/home/Reviews";

const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row justify-evenly items-center gap-12 px-6 md:px-16 pb-8 md:py-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-[700px] text-pretty">
            Learn New Skills <span className="text-primary">Anytime</span> and <span className="text-primary">Anywhere</span>
          </h1>
          <p className="max-w-96 text-pretty text-gray-700">
            Take advantage of this moment, let&apos;s join us. You will get many benefits and can study anywhere and anytime
          </p>
          <div className="space-x-4">
            <Button className=" md:text-lg md:p-6">Get Started</Button>
            <Button variant="outline" className=" md:text-lg md:p-6 border-gray-300">
              Join Now
            </Button>
          </div>
        </div>
        <div>
          <Image src={heroImage} alt="hero image" className="md:w-[600px] max-w-full" width={400} height={400} />
        </div>
      </section>

      <section className="bg-white px-6 md:px-16 py-10 space-y-4">
        <CoursesCategory />
      </section>

      <section className="bg-white px-6 md:px-16 py-10 space-y-4">
        <RecomendationCourses />
      </section>

      <section className="bg-white px-6 md:px-16 py-10 space-y-4">
        <h2 className="text-3xl font-semibold max-w-70">Why do you need to study with us?</h2>
        <p className="text-gray-600 max-w-68 leading-tight">Find out their experiences and reasons for joining us</p>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 mt-8">
          <div className="hidden md:block">
            <Image src={whyUsImage} alt="hero image" className="md:w-[400px] max-w-full" width={200} height={200} />
          </div>
          <div>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Award className="text-primary" size={18} />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">120+ Premium Courses</h3>
                  <p className="text-gray-600 max-w-82 leading-tight">we facilitate members with many premium classes</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <House className="text-primary" size={18} />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Study anywhere and anytime</h3>
                  <p className="text-gray-600 max-w-82 leading-tight">Join us you can learn more flexibly. Study anywhere and anytime</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Headset className="text-primary" size={18} />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Taught by a professional mentor</h3>
                  <p className="text-gray-600 max-w-82 leading-tight">Join us you can learn with a mentor who has been proven professional</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-10 space-y-4">
        <Reviews />
      </section>

      <section className="bg-white px-6 md:px-16 py-10 space-y-4">
        
      </section>
    </>
  );
};

export default Home;
