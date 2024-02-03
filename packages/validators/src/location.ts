import { z } from "zod";

export const CreateLocationSchema = z.object({
  coords: z.any(),
  addressId: z.string(),
});
