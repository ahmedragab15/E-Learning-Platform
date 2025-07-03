import { CoursesCategories, Courses } from "@/components/index";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserHome = () => {
  return (
    <>
      <section className="bg-white px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
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
          />
        </div>
      </section>
      <section className=" px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Courses
            heading={
              <Heading
                title="Recomendation Courses"
                description="You can find recomendation courses from all course categories and quickly learn more"
              />
            }
          />
        </div>
      </section>

      <section className=" px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Courses
            heading={
              <Heading title="Popular Course" description="You can find recomendation courses from all course categories and quickly learn more" />
            }
          />
        </div>
      </section>
    </>
  );
};

export default UserHome;
