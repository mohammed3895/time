import { z } from "zod";

export const addEventSchema = z.object({
  name: z.string().min(1),
  start: z.date(),
  end: z.date(),
  description: z.string().min(16),
});
