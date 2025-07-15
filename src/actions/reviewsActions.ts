"use server";

import prisma from "@/lib/db";
// import { Prisma } from "@/generated/prisma";

export async function getAllReviewsAction() {
  return await prisma.review.findMany({
    include: {
      user: true,
      course: true,
    },
  });
}

export async function getReviewsByCourseId(courseId: number) {
  return await prisma.review.findMany({
    where: { courseId },
    include: {
      user: true,
      course: true,
    },
  });
}
