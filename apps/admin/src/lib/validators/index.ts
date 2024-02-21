import { z } from "zod";

import { States } from "@acme/utils";

// group schema without days and meetings (for simplicity)

export const locationSchema = z.object({
  lattitude: z.string(),
  longitude: z.string(),
  name: z.string(),
});

export const basicGroupSchema = z.object({
  name: z.string().min(3),
  city: z.string().min(3),
  state: z.nativeEnum(States).default(States.Minskaya),
  street: z.string().min(3),
  // room: z.string().optional(),
  comments: z.string().optional(),
  // transport: z.string().optional(),
  photoUrls: z.array(z.string()).optional(),
  lattitude: z.number(),
  longitude: z.number(),
  // days: z.array(DaySchema),
});

export const daysAndMeetingsGroupSchema = z.object({
  // days: z.array(DaySchema),
});
