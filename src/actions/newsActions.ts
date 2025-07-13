"use server";

import prisma from "@/lib/db";
// import { Prisma } from "@/generated/prisma";

export async function getAllNewsAction() {
  return await prisma.news.findMany({
    include: {
      category: true,
    },
  });
}
