"use client";
import { useState } from "react";
import CategoryCard from "./CategoryCard";
import CourseCard from "./CourseCard";
import { ArrowNavigation } from "@/components/shared/ArrowNavigation";
import { categories, allCourses, isUser } from "@/dummyData";

const CoursesCategories = ({ heading, navigation = <ArrowNavigation /> }: { heading: React.ReactNode; navigation?: React.ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Business");
  return (
    <>
      {heading}
      <div className="flex justify-evenly flex-wrap gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        ))}
      </div>

      {isUser && (
        <>
          <div className="flex justify-evenly flex-wrap gap-6 my-6">
            {allCourses
              .filter((course) => course.category === selectedCategory)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
          {navigation}
        </>
      )}
    </>
  );
};

export default CoursesCategories;
