import { z } from "zod";

export const ProfileSettingsSchema = z.object({
  username: z
    .string({ message: "User name is required" })
    .min(5, { message: "User name must be at least 5 characters" })
    .max(20, { message: "User name must be at most 20 characters" }),
  fullname: z
    .string({ message: "Full name is required" })
    .min(8, { message: "Full name must be at least 8 characters" })
    .max(20, { message: "Full name must be at most 20 characters" }),
  language: z.string(),
  role: z.enum(["USER", "INSTRUCTOR"]),
});

export type ProfileSettingsSchemaSchemaValues = z.infer<typeof ProfileSettingsSchema>;

const emailField = z
  .string({ message: "Email is required" })
  .email({ message: "Invalid email address" })
  .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

const passwordField = z
  .string({ message: "Password is required" })
  .min(6, { message: "Password must be at least 6 characters" })
  .max(32, { message: "Password must be at most 32 characters" })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/g, {
    message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
  });

const confirmPasswordField = z.string({ message: "Confirm password is required" });

export const ChangeAccountSchema = z
  .object({
    email: emailField,
    currentPassword: passwordField,
    newPassword: passwordField,
    confirmNewPassword: confirmPasswordField,
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords must match",
    path: ["confirmNewPassword"],
  });

export type ChangeAccountSchemaValues = z.infer<typeof ChangeAccountSchema>;

export const SocialSettingsSchema = z.object({
  linkedin: z.string().url({ message: "Invalid URL" }),
  github: z.string().url({ message: "Invalid URL" }),
  facebook: z.string().url({ message: "Invalid URL" }),
  website: z.string().url({ message: "Invalid URL" }),
});

export type SocialSettingsSchemaValues = z.infer<typeof SocialSettingsSchema>;
