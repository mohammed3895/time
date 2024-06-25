import { z } from "zod";

export const addEventSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  start: z.date({ message: "Start date is required" }),
  end: z.date({ message: "End date is required" }),
  description: z
    .string()
    .min(8, { message: "Description must be at least 8 characters" }),
});
