import { getAllInstructorsAction } from "@/actions/instructorActions";
import { Container, InstructorCard, Heading } from "@/components";
import React from "react";

const AllInstructors = async () => {
  const instructors = await getAllInstructorsAction();
  return (
    <Container>
      <Heading title="All Instructors" />
      <div className="flex justify-center gap-4 flex-wrap">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.slug} instructor={instructor} className="max-w-96" />
        ))}
      </div>
    </Container>
  );
};

export default AllInstructors;
