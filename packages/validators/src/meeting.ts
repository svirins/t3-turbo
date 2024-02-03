import { z } from "zod";

export const CreateMeetingsSchema = z.object({
  start: z.date(),
  end: z.date(),
  topic: z.string(),
  dayId: z.string(),
});
