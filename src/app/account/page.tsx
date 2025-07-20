import { Courses, Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { user } from "@/dummyData";
import React from "react";

const MyClass = () => {
  return (
      <div className="space-y-6">
        <Heading title="My Class" description="Continue to learn with new knowledge" />
        <div className="flex gap-4">
          <Button>All</Button>
          <Button variant={"outline"}>
            Started
          </Button>
          <Button variant={"outline"}>
            Finished
          </Button>
        </div>
            <Courses progressCourses={user.allCourses} className="justify-center lg:justify-start" />
      </div>
  );
};

export default MyClass;
