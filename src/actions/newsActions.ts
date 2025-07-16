"use server";

import prisma from "@/lib/db";
// import { Prisma } from "@/generated/prisma";

export async function getAllNewsAction() {
  try {
    return await prisma.news.findMany({
      include: {
        category: true,
      },
    });
  } catch (error) {
    console.error("getAllNewsAction error:", error);
    return [];
  }
}
