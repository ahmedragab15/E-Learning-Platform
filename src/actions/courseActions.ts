"use server";
import prisma from "@/lib/db";
import { Prisma } from "@/generated/prisma";
import { generateSlug } from "@/lib/slugify";

export async function getCourses() {
  return await prisma.course.findMany({
    include: {
      category: true,
      instructor: true,
      reviews: true,
      lessons: true,
    },
  });
}

export async function getCategories() {
  return await prisma.category.findMany({
    include: {
      courses: true,
    },
  });
}

export async function createPost(data: Prisma.CourseCreateInput) {
  return await prisma.course.create({
    data: {
      ...data,
      slug: await generateSlug("Course", data.title),
    },
  });
}
