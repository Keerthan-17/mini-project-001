import { z } from "zod";

export const createSubmissionSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters"),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 characters"),

  address: z
    .string()
    .trim()
    .min(5, "Address must be at least 5 characters"),

  message: z
    .string()
    .trim()
    .min(1, "Message is required"),
});