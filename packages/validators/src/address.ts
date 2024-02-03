import { z } from "zod";

export const CreateAddressSchema = z.object({
  city: z.string().min(3),
  state: z.string(),
  street: z.string().min(3),
  room: z.string().optional(),
  comments: z.string().optional(),
  latitude: z.number(),
  longitude: z.number(),
  groupId: z.string(),
});
