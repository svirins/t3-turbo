import { z } from "zod";
import { States } from "@acme/utils";

// group schema without days and meetings (for simplicity)

export const locationSchema = z.object({
  lattitude: z.string(),
  longitude: z.string(),
  name: z.string(),
});
export const addressSchema = z.object({
  city: z.string().min(3),
  state: z.nativeEnum(States),
  street: z.string().min(3),
  room: z.string().optional(),
  comments: z.string().optional(),
  transport: z.string().optional(),
  photoUrls: z.array(z.string()).optional(),
  // location: locationSchema.optional(),
});
export const groupSchema = z.object({
  name: z.string().min(3),
  established: z.date().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  address: addressSchema.optional(),
  // days: z.array(DaySchema),
});







