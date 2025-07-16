import { Container, Courses, Heading } from "@/components";
import { images } from "@/components/shared/Images";
import SocialCard from "@/components/cards/SocialCard";
import Image from "next/image";
import React from "react";
import { getAllInstructorsAction } from "@/actions/instructorActions";
import { FacebookIcon, GlobeIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { notFound } from "next/navigation";

const InstructorDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const instructors = await getAllInstructorsAction();
  const chossen = instructors.find((instructor) => instructor.slug === slug);
  if (!chossen) {
    notFound();
  }

  const socials = {
    Website: { url: chossen?.websiteUrl, icon: <GlobeIcon /> },
    Facebook: { url: chossen?.facebookUrl, icon: <FacebookIcon /> },
    Twitter: { url: chossen?.twitterUrl, icon: <TwitterIcon /> },
    LinkedIn: { url: chossen?.linkedinUrl, icon: <LinkedinIcon /> },
    YouTube: { url: chossen?.youtubeUrl, icon: <YoutubeIcon /> },
  };

  return (
    <>
      <section className="bg-white">
        <Image src={images.instractorCover} alt={"instractor cover"} width={1000} height={1000} className="w-full " />
        <Container As={"div"} className="mt-[-80px] md:mt-[-120px]">
          <Image
            src={(chossen?.avatarUrl as string) || "http://dergipark.org.tr/assets/app/images/buddy_sample.png"}
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
          {Object.entries(socials).map(([key, social], index) => (
            <SocialCard key={index} href={social.url as string} icon={social.icon} title={key[0].toUpperCase() + key.slice(1)} />
          ))}
        </div>
      </Container>
      <Container background="bg-white">
        <Courses heading={<Heading title="My Courses" className="text-2xl" />} courses={chossen?.courses} />
      </Container>
    </>
  );
};

export default InstructorDetails;
