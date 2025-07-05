import { z } from "zod";

export const contactUs = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" })
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
  subject: z.string().min(1, { message: "Subject is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export type contactUsValues = z.infer<typeof contactUs>;
