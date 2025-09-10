export const dynamic = "force-dynamic";
import { getCoursesAction } from "@/actions/courseActions";
import { Courses, CoursesCategories } from "@/components";
import { ChevronNavigation } from "@/components/shared/ArrowNavigation";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CoursesCategory = async (Props: any) => {
  const allCourses = await getCoursesAction();
  return (
    <>
      <section className="bg-white dark:bg-slate-800 px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <span className="text-muted-foreground">Find the course category you want</span>
          <CoursesCategories
            heading={
              <Heading
                title="Courses Category"
                cta={
                  <Button variant="link">
                    <Link href="/all-courses">See All</Link>
                  </Button>
                }
              />
            }
            searchParams={Props.searchParams}
          />
        </div>
      </section>
      <section className="px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Courses
            heading={<Heading title="You can also study other categories" />}
            navigation={<ChevronNavigation />}
            courses={allCourses.slice(0, 9)}
            swiper
          />
        </div>
      </section>
    </>
  );
};

export default CoursesCategory;
