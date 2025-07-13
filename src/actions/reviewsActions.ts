"use server"

import prisma from "@/lib/db";
// import { Prisma } from "@/generated/prisma";

export async function getAllReviewsAction() {
    return await prisma.review.findMany({
        include: {
            user: true,
        },
    });
}