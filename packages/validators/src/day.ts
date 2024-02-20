import { z } from "zod";

import { WeekDays } from "@acme/utils";

import { MeetingsSchema } from "./meeting";

export const DaySchema = z.object({
  weekday: z.nativeEnum(WeekDays),
  meetings: z.array(MeetingsSchema)

});
