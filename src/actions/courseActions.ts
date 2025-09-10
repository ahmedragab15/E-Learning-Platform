"use server";
import prisma from "@/lib/db";
import { Prisma } from "@/generated/prisma";
import { generateSlug } from "@/lib/slugify";
import { revalidatePath } from "next/cache";

export async function getCoursesAction(skip: number = 0, take: number = 1000) {
  try {
    return await prisma.course.findMany({
      skip,
      take,
      include: {
        enrollments: {
          include: {
            user: true,
            course: true,
          },
        },
        category: true,
        instructor: true,
        reviews: {
          include: {
            user: true,
            course: true,
          },
        },
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
        enrollments: {
          include: {
            user: true,
            course: true,
          },
        },
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

export async function deleteCourseAction(id: number) {
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

    await prisma.$transaction([
      prisma.comment.deleteMany({ where: { courseId: id } }),
      prisma.review.deleteMany({ where: { courseId: id } }),
      prisma.enrollment.deleteMany({ where: { courseId: id } }),
      prisma.courseRating.deleteMany({ where: { courseId: id } }),
      prisma.learningItem.deleteMany({
        where: {
          learning: {
            courseId: id,
          },
        },
      }),
      prisma.courseLearning.deleteMany({
        where: {
          courseId: id,
        },
      }),
      prisma.lesson.deleteMany({
        where: {
          chapter: {
            courseId: id,
          },
        },
      }),
      prisma.chapter.deleteMany({
        where: {
          courseId: id,
        },
      }),

      prisma.course.delete({
        where: {
          id,
        },
      }),
    ]);

    revalidatePath("/admin/courses");
    return {
      success: true,
      message: "Course deleted successfully",
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong from server",
      status: 500,
    };
  }
}
