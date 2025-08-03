"use server";
import prisma from "@/lib/db";
import { Prisma } from "@/generated/prisma";
import { generateSlug } from "@/lib/slugify";
import { revalidatePath } from "next/cache";

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
        comments: {
          include: {
            course: true,
            user: true,
          },
        },
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
          orderBy: { id: "asc" },
          include: {
            details: {
              orderBy: { id: "asc" },
            },
          },
        },
        courseRating: true,
        comments: {
          include: {
            course: true,
            user: true,
          },
        },
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

export async function createCourseAction(data: Prisma.CourseCreateInput) {
  try {
    const admin = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    });
    if (!admin) {
      return {
        success: false,
        message: "Admin user not found",
        status: 404,
      };
    }
    await prisma.course.create({
      data: {
        ...data,
        slug: await generateSlug("Course", data.title),
      },
    });
    revalidatePath("/admin/courses");
    return {
      success: true,
      message: "Course created successfully",
      status: 201,
    };
  } catch (error) {
    console.error("createCourseAction error:", error);
    return null;
  }
}
