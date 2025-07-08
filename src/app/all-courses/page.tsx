"use client";
import { Courses, SelectMenu, Heading, Container } from "@/components";
import { allCourses, categories } from "@/dummyData";
import { useState } from "react";

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  return (
    <>
      <Container>
        <Courses
          heading={
            <Heading
              title="All Courses"
              cta={
                <SelectMenu
                  label="Select a Category"
                  options={["All", ...categories.map((category) => category.title)]}
                  selected={selectedCategory}
                  setSelected={setSelectedCategory}
                />
              }
            />
          }
          courses={selectedCategory === "All" ? allCourses : allCourses.filter((course) => course.category === selectedCategory)}
        />
      </Container>
    </>
  );
};

export default AllCourses;
