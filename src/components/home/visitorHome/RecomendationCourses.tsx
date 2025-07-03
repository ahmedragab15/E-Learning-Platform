import CourseCard from "./CourseCard";
import ArrowNavigation from "@/components/shared/ArrowNavigation";

const courses: ICourse[] = [
  {
    id: 1,
    title: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Business",
    duration: "3 Months (20 Hours/Week)",
    price: "89",
    ratingCount: "3.5",
    ratingTotal: "239",
    badgeBg: "bg-blue-500",
  },
  {
    id: 2,
    title: "UIUX Design",
    image:
      "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Design",
    duration: "3 Months (20 Hours/Week)",
    price: "89",
    ratingCount: "4.5",
    ratingTotal: "239",
    badgeBg: "bg-orange-500",
  },
  {
    id: 3,
    title: "Next Framework",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Progamming",
    duration: "3 Months (20 Hours/Week)",
    price: "89",
    ratingCount: "4.5",
    ratingTotal: "239",
    badgeBg: "bg-purple-500",
  },
  {
    id: 4,
    title: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
    duration: "3 Months (20 Hours/Week)",
    price: "89",
    ratingCount: "4.5",
    ratingTotal: "239",
    badgeBg: "bg-green-500",
  },
];

const RecomendationCourses = () => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">Recomendation Courses</h2>
        <p className="text-gray-600 max-w-96 leading-tight">You can find recomendation courses from all course categories and quickly learn more</p>
      </div>
      <div className="flex justify-evenly flex-wrap gap-6 my-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <ArrowNavigation />
    </>
  );
};

export default RecomendationCourses;
