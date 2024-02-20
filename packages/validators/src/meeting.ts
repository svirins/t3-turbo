import { z } from "zod";

import { Topics } from "@acme/utils";

export const MeetingsSchema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
  topic: z.nativeEnum(Topics),
  dayId: z.string(),
});
