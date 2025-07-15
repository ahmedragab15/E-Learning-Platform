"use server";
import prisma from "@/lib/db";
// import { Prisma } from "@/generated/prisma";
// import { generateSlug } from "@/lib/slugify";

export async function getCategoriesAction() {
  return await prisma.category.findMany({
    include: {
      courses: true,
    },
  });
}

