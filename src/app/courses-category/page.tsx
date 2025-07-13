export const dynamic = "force-dynamic";
import { getCoursesAction } from "@/actions/courseActions";
import { Courses, CoursesCategories } from "@/components";
import { ChevronNavigation } from "@/components/shared/ArrowNavigation";
import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  searchParams: { category?: string };
}
const CoursesCategory = async ({ searchParams }: Props) => {
  const allCourses = await getCoursesAction();
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
                  <Button variant="link">
                    <Link href="/all-courses">See All</Link>
                  </Button>
                }
              />
            }
            navigation={<ChevronNavigation />}
            searchParams={searchParams}
          />
        </div>
      </section>
      <section className="px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Courses
            heading={<Heading title="You can also study other categories" />}
            navigation={<ChevronNavigation />}
            courses={allCourses.slice(0, 4)}
          />
        </div>
      </section>
    </>
  );
};

export default CoursesCategory;
