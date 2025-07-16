"use server";

import prisma from "@/lib/db";
// import { Prisma } from "@/generated/prisma";

export async function getAllReviewsAction() {
  try {
    return await prisma.review.findMany({
      include: {
        user: true,
        course: true,
      },
    });
  } catch (error) {
    console.error("getAllReviewsAction error:", error);
    return [];
  }
}

export async function getReviewsByCourseIdAction(courseId: number) {
  try {
    return await prisma.review.findMany({
      where: { courseId },
      include: {
        user: true,
        course: true,
      },
    });
  } catch (error) {
    console.error("getReviewsByCourseIdAction error:", error);
    return [];
  }
}
