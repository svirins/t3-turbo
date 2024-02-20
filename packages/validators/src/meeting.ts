import { z } from "zod";

import { Topics, Repeats} from "@acme/utils";

export const MeetingsSchema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
  topic: z.nativeEnum(Topics),
  repeats: z.array(z.nativeEnum(Repeats)),
});
