"use server";
import { Prisma } from "@/generated/prisma";
import prisma from "@/lib/db";
import { registerSchema } from "@/schema/registerSchema";

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

export async function createUserAction(data: Prisma.UserCreateInput) {
 const parsed = registerSchema.safeParse(data);

 if (!parsed.success) {
   console.error(parsed.error);
   throw new Error("Invalid input data");
 }

    return await prisma.user.create({
      data: {
        name: parsed.data.fullname,
        username: parsed.data.username,
        email: parsed.data.email,
        // password: parsed.data.password,
        // Hash the password before saving it to the database
      },
    });
}

export async function updateUserAction(id: number, data: Prisma.UserCreateInput) {
  return await prisma.user.update({
    where: { id },
    data: { ...data },
  });
}
