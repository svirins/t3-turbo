import { z } from "zod";

export const LocationSchema = z.object({
  lattitude: z.string(),
  longitude: z.string(),
  name: z.string(),
});
