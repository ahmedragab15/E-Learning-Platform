"use server";
import prisma from "@/lib/db";
import { Prisma } from "@/generated/prisma";
import { generateSlug } from "@/lib/slugify";

export async function getCourses() {
  return await prisma.course.findMany();
}

export async function createPost(data: Prisma.CourseCreateInput) {
  return await prisma.course.create({
    data: {
      ...data,
      slug: await generateSlug("Course", data.title),
    },
  });
}
