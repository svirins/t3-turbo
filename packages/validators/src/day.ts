import { z } from "zod";

import { CreateMeetingsSchema } from "./meeting";

export const CreateDaySchema = z.object({
  name: z.string(),
  meetings: z.array(CreateMeetingsSchema),
  groupId: z.string(),
});
