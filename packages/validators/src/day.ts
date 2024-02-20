import { z } from "zod";

import { WeekDays } from "@acme/utils";

import { MeetingsSchema } from "./meeting";

export const DaySchema = z.object({
  name: z.nativeEnum(WeekDays),
  meetings: z.array(MeetingsSchema),
  groupId: z.string(),
});
