import { z } from "zod";

import { AddressSchema } from "./address";
import { DaySchema } from "./day";

export const GroupSchema = z.object({
  name: z.string().min(3),
  established: z.date().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  address: AddressSchema.optional(),
  days: z.array(DaySchema),
});
