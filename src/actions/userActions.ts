"use server";
import { Prisma } from "@/generated/prisma";
import prisma from "@/lib/db";
import { generateJWT } from "@/lib/generateJWT";
import { loginSchema } from "@/schema/loginSchema";
import { serverRegisterSchema } from "@/schema/registerSchema";
import bcrypt from "bcrypt";

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
  try {
    // validate data
    const parsed = serverRegisterSchema.safeParse(data);
    if (!parsed.success) {
      return { success: false, message: "Invalid input data", status: 400 };
    }
    // check if user already exists by email
    const user = await prisma.user.findUnique({
      where: { email: parsed.data.email },
    });
    if (user) {
      return { success: false, message: "User already exists", status: 400 };
    }
    // create user and hash the password
    await prisma.user.create({
      data: { ...parsed.data, password: await bcrypt.hash(parsed.data.password, 10) },
    });
    return { success: true, message: "User created successfully", status: 201 };
    // Handle unexpected errors
  } catch (error) {
    console.error("createUserAction error:", error);
    return { success: false, message: "Something went wrong", status: 500 };
  }
}

export async function userLoginAction(data: { email: string; password: string }) {
  try {
    // validate data
    const parsed = loginSchema.safeParse(data);
    if (!parsed.success) {
      return { success: false, message: "Invalid input data", status: 400 };
    }
    // check if user doesn't exists by email
    const user = await prisma.user.findUnique({
      where: { email: parsed.data.email },
    });
    if (!user) {
      return { success: false, message: "Invalid email or password", status: 401 };
    }
    // check if password is correct by comparing hashed password
    const isPasswordValid = await bcrypt.compare(parsed.data.password, user.password);
    if (!isPasswordValid) {
      return { success: false, message: "Invalid email or password", status: 401 };
    }
    // create token
    const jwtPayload: JwtPayload = {
      id: user.id,
      fullName: user.fullname,
      email: user.email,
      isAdmin: user.isAdmin,
    };
    const token = generateJWT(jwtPayload);
    // login successful
    return { success: true, token, message: "Login successful", status: 200 };
    // Handle unexpected errors
  } catch (error) {
    console.error("userLoginAction error:", error);
    return { success: false, message: "Something went wrong", status: 500 };
  }
}

export async function updateUserAction(id: number, data: Prisma.UserCreateInput) {
  return await prisma.user.update({
    where: { id },
    data: { ...data },
  });
}

export async function deleteUserAction(id: number) {
  return await prisma.user.delete({
    where: { id },
  });
}
