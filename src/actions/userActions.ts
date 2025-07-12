"use server";
import prisma from "@/lib/db";

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function getUser(id: number) {
  return await prisma.user.findUnique({
    where: { id },
  });
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
