import { AccordionMenu } from "@/components/shared/Accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses } from "@/dummyData";
import { Captions, CircleDollarSign, Star } from "lucide-react";
import Image from "next/image";

const CourseDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const chossen = courses.find((course) => course.slug === slug);

  const courseDetails = {
    detailDescription:
      "UI design on a product aims to enhance the appearance of the product. While the UX design is designed to provide a pleasant experience when using the product. The focus of UI design is the beauty of the appearance, while the focus of UX design is the satisfaction of using the product.",
    whatYouWillLearn: [
      {
        title: "User Research",
        description:
          "someone who works to find information from target users (users) about their behavior and needs which is then analyzed to produce a design that fits the user's needs. in this section you will learn about:",
        list: ["Empathize", "Problem solving method", "Usability Testing"],
      },
      {
        title: "Wireframe",
        description:
          "a framework that serves to make the layout of a website to suit the client's wishes before entering the design or coding process.",
        list: ["Lo Fidelity", "Hight Fidelity"],
      },
      {
        title: "Figma Basic",
        description: "A tool for a UIUX Designer to do their job",
        list: ["Get to know the tools", "Try out tools"],
      },
    ],
  };

  const lessons = [
    {
      topic: "User Research",
      lesson: [
        { title: "Lesson 1", duration: "20 min" },
        { title: "Lesson 2", duration: "30 min" },
        { title: "Lesson 3", duration: "30 min" },
        { title: "Lesson 4", duration: "30 min" },
      ],
    },
    {
      topic: "Wireframe",
      lesson: [
        { title: "Lesson 5", duration: "20 min" },
        { title: "Lesson 6", duration: "30 min" },
        { title: "Lesson 7", duration: "30 min" },
        { title: "Lesson 8", duration: "30 min" },
      ],
    },
    {
      topic: "Figma Basic",
      lesson: [
        { title: "Lesson 9", duration: "20 min" },
        { title: "Lesson 10", duration: "30 min" },
        { title: "Lesson 11", duration: "30 min" },
        { title: "Lesson 12", duration: "30 min" },
      ],
    },
   
  ];

  return (
    <>
      <section className="px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6 flex flex-col-reverse md:flex-row justify-evenly gap-4">
          <div className="content flex-1 space-y-6">
            <span>
              <Badge variant="outline" className="text-base md:text-md text-primary relative border-0">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                {chossen?.category}
              </Badge>
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold">{chossen?.title}</h1>
            <p className="text-sm md:text-lg text-gray-600 max-w-full">{chossen?.description}</p>
            <div className="space-x-6">
              <Button>Join Now</Button>
              <Button variant="outline" className="text-primary border-primary bg-transparent">
                Add to Cart
              </Button>
            </div>
            <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-4">
              <div className="space-y-2">
                <h3 className="text-md text-gray-600 font-medium">Rating Class</h3>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: Number(Math.ceil(Number(chossen?.ratingCount))) }).map((_, index) => (
                    <Star key={index} fill="#fbbf24" size={18} className="text-transparent " />
                  ))}
                  {Array.from({ length: 5 - Number(Math.ceil(Number(chossen?.ratingCount))) }).map((_, index) => (
                    <Star key={index} fill="#bababa" size={18} className="text-transparent " />
                  ))}
                  <p className=" text-xs">
                    {chossen?.ratingCount}
                    <span className="text-gray-600"> ({chossen?.ratingTotal})</span>
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-md text-gray-600 font-medium">Instructure</h3>
                <h4 className="text-sm font-semibold text-primary underline">{chossen?.instructor}</h4>
              </div>
              <div className="space-y-2">
                <h3 className="text-md text-gray-600 font-medium">Translation Video</h3>
                <h4 className="text-sm text-gray-600 font-semibold flex items-center gap-2">
                  <Captions className="text-gray-600" size={18} />
                  <span>{chossen?.translation}</span>
                </h4>
              </div>
              <div className="space-y-2">
                <h3 className="text-md text-gray-600 font-medium">Price</h3>
                <h4 className="text-sm text-primary font-semibold flex items-center gap-2">
                  <CircleDollarSign className="text-gray-600" size={18} />
                  <span>${chossen?.price}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="flex-1 md:justify-items-end justify-items-center">
            <Image src={chossen?.image || ""} alt="course image" width={400} height={400} className="rounded-md" />
          </div>
        </div>
      </section>
      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6 ">
          <div className="flex flex-col justify-evenly gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold max-w-96 leading-8">Description Course</h2>
              <p className="text-gray-600">{courseDetails.detailDescription}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold max-w-96 leading-8">What you will learn</h2>
              <p className="text-gray-600">What will you learn from this course?</p>
            </div>
            <ul className="space-y-4">
              {courseDetails.whatYouWillLearn.map((item, index) => (
                <li key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-1">
                    <span className="w-4 h-4 p-3 text-white text-sm bg-primary rounded-full flex items-center justify-center">{index + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 ml-8">{item.description}</p>

                  <ul className="space-y-2">
                    {item.list.map((t, index) => (
                      <li key={index} className=" flex items-center gap-1  ml-8">
                        <span className="w-3 h-3 text-white bg-gray-300 rounded-full flex items-center justify-center"></span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className=" px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6 ">
          <h2>List of Lessons</h2>
          <AccordionMenu  data={lessons}/>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
