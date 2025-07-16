"use server";
import prisma from "@/lib/db";

export async function getAllUsersAction() {
  try {
    return await prisma.user.findMany({
      include: {
        reviews: true,
        enrollments: true,
      },
    });
  } catch (error) {
    console.error("getAllUsersAction error:", error);
    return [];
  }
}

export async function getUserAction(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        reviews: true,
        enrollments: true,
      },
    });
    if (!user) {
      console.warn(`User not found for id: ${id}`);
      return null;
    }
    return user;
  } catch (error) {
    console.error("getUserAction error:", error);
    return null;
  }
}

// export async function createUser(data) {
//   return await prisma.user.create({ data });
// }

// export async function updateUser(id: string, data: any) {
//   return await prisma.user.update({
//     where: { id },
//     data,
//   });
// }
