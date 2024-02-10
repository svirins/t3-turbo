import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const locationRouter = createTRPCRouter({
  closest: publicProcedure
    .input(z.object({ latitude: z.number(), longitude: z.number() }))
    .query(async ({ ctx, input }) => {
      const groups = await ctx.prisma.location.findClosestLocations({
        latitude: input.latitude,
        longitude: input.longitude,
      });
      return groups;
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const location = await ctx.prisma.location.findById({
        id: input.id,
      });
      return location;
    }),
});
