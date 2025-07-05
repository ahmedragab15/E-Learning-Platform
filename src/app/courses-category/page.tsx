import { Courses, CoursesCategories } from "@/components";
import { ButtonArrowNavigation } from "@/components/shared/ArrowNavigation";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CoursesCategory = () => {
  return (
    <>
      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <span className="text-gray-600">Find the course category you want</span>
          <CoursesCategories
            heading={
              <Heading
                title="Courses Category"
                cta={
                  <Button variant="link" asChild>
                    <Link href="/">See All</Link>
                  </Button>
                }
              />
            }
            navigation={<ButtonArrowNavigation />}
          />
        </div>
      </section>
      <section className="px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Courses heading={<Heading title="You can also study other categories" />} navigation={<ButtonArrowNavigation />} />
        </div>
      </section>
    </>
  );
};

export default CoursesCategory;
