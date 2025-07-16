"use server";
import prisma from "@/lib/db";
import { Prisma } from "@/generated/prisma";
import { generateSlug } from "@/lib/slugify";

export async function getCoursesAction() {
  try {
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
          include: {
            details: true,
          },
        },
        courseRating: true,
      },
    });
  } catch (error) {
    console.error("getCoursesAction error:", error);
    return [];
  }
}

export async function getCourseBySlugAction(slug: string) {
  try {
    const course = await prisma.course.findUnique({
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
          include: {
            details: true,
          },
        },
        courseRating: true,
      },
    });
    if (!course) {
      console.warn(`Course not found for slug: ${slug}`);
      return null;
    }
    return course;
  } catch (error) {
    console.error("getCourseBySlug error:", error);
    return null;
  }
}

export async function createPostAction(data: Prisma.CourseCreateInput) {
  try {
    return await prisma.course.create({
      data: {
        ...data,
        slug: await generateSlug("Course", data.title),
      },
    });
  } catch (error) {
    console.error("createPostAction error:", error);
    return null;
  }
}
