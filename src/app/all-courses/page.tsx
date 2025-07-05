import { Courses, SelectMenu, Heading } from "@/components";

const categories = ['Business', 'Design', 'Programming', 'Health'];

const AllCourses = () => {
  return (
    <>
      <section className=" px-6 md:px-16 py-10">
        <div className="container mx-auto space-y-6 my-6">
          <Courses heading={<Heading title="All Courses" cta={<SelectMenu label='Select a Category' options={categories} />} />} />
        </div>
      </section>
    </>
  );
}

export default AllCourses