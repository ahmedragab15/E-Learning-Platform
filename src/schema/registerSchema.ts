import { z } from "zod";

export const registerSchema = z
  .object({
    fullname: z.string().min(1, { message: "Full name is required" }).max(20, { message: "Full name must be at most 20 characters" }),
    username: z.string().min(1, { message: "User name is required" }).max(20, { message: "User name must be at most 20 characters" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email is required" })
      .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(32, { message: "Password must be at most 32 characters" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/g, {
        message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
      }),
    confirmPassword: z.string().min(1, { message: "Password is required" }).max(32, { message: "Password must be at most 32 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type registerSchemaValues = z.infer<typeof registerSchema>;
