import { instructors } from "@/dummyData";
import React from "react";

const InstructorDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const chossen = instructors.find((instructor) => instructor.slug === slug);
  return (
    <div>
      <h1>{chossen?.name}</h1>
    </div>
  );
};

export default InstructorDetails;
