import { Container, Courses, Heading } from "@/components";
import { images } from "@/components/shared/Images";
import SocialCard from "@/components/SocialCard";
import { instructors } from "@/dummyData";
import Image from "next/image";
import React from "react";

const InstructorDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const chossen = instructors.find((instructor) => instructor.slug === slug);
  return (
    <>
      <section className="bg-white">
        <Image src={images.instractorCover} alt={"instractor cover"} width={1000} height={1000} className="w-full " />
        <Container As={"div"} className="mt-[-80px] md:mt-[-120px]">
          <Image
            src={chossen?.avatar as string}
            alt={"instractor cover"}
            width={200}
            height={200}
            className="rounded-full w-28 h-28 md:w-40 md:h-40 mx-auto md:mx-0 object-cover"
          />
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className=" space-y-2">
              <h1 className="text-2xl md:text-4xl font-semibold">{chossen?.name}</h1>
              <h2 className="text-md md:text-lg text-gray-600 font-semibold ml-1">{chossen?.headline}</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="border border-primary rounded-md p-4">
                <h3 className="text-gray-600">Total Student</h3>
                <h4 className="font-semibold text-2xl">{chossen?.totalStudents}</h4>
              </div>
              <div className="border border-primary rounded-md p-4">
                <h3 className="text-gray-600">Total Reviews</h3>
                <h4 className="font-semibold text-2xl">{chossen?.totalReviews}</h4>
              </div>
            </div>
          </div>
          <p className="text-gray-600">{chossen?.bio}</p>
        </Container>
      </section>
      <Container background="bg-white my-6">
        <Heading title="You can also follow me on other platforms" className="text-xl max-w-fit" />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          {Object.entries(chossen?.social || {}).map(([key, social], index) => (
            <SocialCard key={index} href={social.url} icon={social.icon} title={key[0].toUpperCase() + key.slice(1)} />
          ))}
        </div>
      </Container>
      <Container background="bg-white">
        <Courses heading={<Heading title="My Courses" className="text-2xl" />} courses={chossen?.totalCourses || []} />
      </Container>
    </>
  );
};

export default InstructorDetails;
