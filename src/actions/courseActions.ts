"use server";
import prisma from "@/lib/db";
import { Prisma } from "@/generated/prisma";
import { generateSlug } from "@/lib/slugify";

export async function getCoursesAction() {
  return await prisma.course.findMany({
    include: {
      category: true,
      instructor: true,
      reviews: true,
      learnings: true,
      Chapters: true,
    },
  });
}

export async function getCategoriesAction() {
  return await prisma.category.findMany({
    include: {
      courses: true,
    },
  });
}



export async function createPostAction(data: Prisma.CourseCreateInput) {
  return await prisma.course.create({
    data: {
      ...data,
      slug: await generateSlug("Course", data.title),
    },
  });
}
