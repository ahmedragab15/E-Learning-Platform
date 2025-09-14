import { getCoursesAction } from "@/actions/courseActions";
import { HeroVisitor, CoursesCategories, Courses, WhyUs, Reviews, AllNews, Banner, Heading, Container } from "@/components/index";
import { ArrowNavigation } from "@/components/shared/ArrowNavigation";
import { getAllReviewsAction } from "@/actions/reviewsActions";
import { getAllNewsAction } from "@/actions/newsActions";
import { getCategoriesAction } from "@/actions/categoryActions";

const VisitorHome = async () => {
  const allCourses = await getCoursesAction();
    const categories = await getCategoriesAction();

  const reviews = await getAllReviewsAction();
  const news = await getAllNewsAction();

  return (
    <>
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-evenly items-center gap-12">
          <HeroVisitor />
        </div>
      </Container>
      <Container background="bg-white dark:bg-slate-800">
        <CoursesCategories heading={<Heading title="Courses Category" />} categories={categories} navigation={<ArrowNavigation id="category" />} id="category" swiper />
      </Container>

      <Container>
        <Courses
          courses={allCourses.slice(0, 7)}
          heading={
            <Heading
              title="Recommendation Courses"
              description="You can find recommendation courses from all course categories and quickly learn more"
            />
          }
          navigation={<ArrowNavigation id="recommendation" />}
          id="recommendation"
          swiper
        />
      </Container>

      <Container background="bg-white dark:bg-slate-800">
        <WhyUs />
      </Container>

      <Container>
        <Reviews
          reviews={reviews.slice(0, 8)}
          heading={
            <Heading title="What our students say" description="Find out what experiences and what they have to say about the course with us" />
          }
          navigation={<ArrowNavigation id="reviews" />}
          swiper
          id="reviews"
        />
      </Container>

      <Container background="bg-white dark:bg-slate-800">
        <AllNews news={news.slice(0, 8)} heading={<Heading title="News for you" />} navigation={<ArrowNavigation id="news" />} swiper id="news" />
      </Container>

      <Container background="bg-white dark:bg-slate-800">
        <Banner
          image="home-banner-image"
          title="Prove it right now"
          description="What are you waiting for? let's join us and get new knowledge and prove it now"
        />
      </Container>
    </>
  );
};

export default VisitorHome;
