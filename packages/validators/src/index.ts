import { z } from "zod";

export const CreateGroupSchema = z.object({
  name: z.string().min(3),
  established: z.date().optional(),
  city: z.string().min(3),
  state: z.string(),
  adress: z.string().min(3),
  email: z.string().email().optional(),
  phone: z.string().min(10),
  adressComments: z.string().min(3).optional(),
  latitude: z.number(),
  longitude: z.number(),
});
