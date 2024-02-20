import { z } from "zod";

import { States } from "@acme/utils";

import { LocationSchema } from "./location";

export const AddressSchema = z.object({
  city: z.string().min(3),
  state: z.nativeEnum(States),
  street: z.string().min(3),
  room: z.string().optional(),
  comments: z.string().optional(),
  transport: z.string().optional(),
  photoUrls: z.array(z.string()).optional(),
  location: LocationSchema.optional(),
});
