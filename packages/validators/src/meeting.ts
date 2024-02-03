import { z } from "zod";

import { States, Topics, WeekDays } from "@acme/types";

export const CreateMeetingsSchema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
  topic: z.string(),
  dayId: z.string(),
});
