"use server";

import prisma from "@/lib/db";
// import { Prisma } from "@/generated/prisma";

export async function getAllInstructorsAction() {
  return await prisma.instructor.findMany({
    include: {
      courses: {
        include: {
          category: true,
          instructor: true,
        },
      },
    },
  });
}

export async function getInstructorBySlug(slug: string) {
  return await prisma.instructor.findUnique({
    where: { slug },
    include: {
      courses: {
        include: {
          category: true,
          instructor: true,
        },
      },
    },
  });
}