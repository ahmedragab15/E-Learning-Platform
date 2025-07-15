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
      learnings: {
        include: {
          items: true,
          course: true,
        },
      },
      Chapters: {
        include:{
          details:true,
        }
      },
      courseRating: true,
    },
  });
}

export async function getCourseBySlug(slug: string) {
  return await prisma.course.findUnique({
    where: { slug },
    include: {
      category: true,
      instructor: {
        include: { courses: true },
      },
      reviews: true,
      learnings: {
        include: {
          items: true,
          course: true,
        },
      },
      Chapters: {
        include:{
          details:true,
        }
      },
      courseRating: true
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
