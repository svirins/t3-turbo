import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const locationRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const locations = await ctx.prisma.location.findMany({
      include: {
        address: {
          include: {
            group: true,
          },
        },
      },
    });
    return locations;
  }),
  closest: publicProcedure
    .input(z.object({ latitude: z.number(), longitude: z.number() }))
    .query(async ({ ctx, input }) => {
      const groups = await ctx.prisma.location.findClosestLocations({
        latitude: input.latitude,
        longitude: input.longitude,
      });
      return groups;
    }),
});
