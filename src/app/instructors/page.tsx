import { getAllInstructorsAction } from "@/actions/instructorActions";
import { Container, InstructorCard, Heading } from "@/components";
import { images } from "@/components/shared/Images";
import { Button } from "@/components/ui/button";
import { getUserFromToken } from "@/lib/verifyJWT";
import Image from "next/image";
import React from "react";

const AllInstructors = async () => {
  const instructors = await getAllInstructorsAction();
  const user = await getUserFromToken();
  return (
    <>
      {user?.role !== "INSTRUCTOR" && (
        <Container background="bg-white">
          <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-4">
            <div className="space-y-4">
              <h1 className="text-6xl max-w-96 font-semibold">Come teach with us</h1>
              <p className="text-muted-foreground max-w-72 ">Become an instructor and change lives — including your own</p>
              {/* //todo: Instructor Form */}
              <Button>Get Started</Button>
            </div>
            <div>
              <Image src={images.techWithUsImg} alt="instructor image" width={900} height={900} className="max-w-full w-[900px] object-cover" />
            </div>
          </div>
        </Container>
      )}
      <Container>
        <Heading title="All Instructors" />
        <div className="flex justify-center gap-4 flex-wrap">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.slug} instructor={instructor} className="max-w-96" />
          ))}
        </div>
      </Container>
    </>
  );
};

export default AllInstructors;
