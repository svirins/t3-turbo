import { z } from "zod";

import { CreateGroupSchema } from "@acme/validators";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const groupRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const groups = await ctx.prisma.group.findMany({
      take: 100,
      orderBy: [{ createdAt: "desc" }],
    });
    return groups;
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const group = await ctx.prisma.group.findUnique({
        where: {
          id: input.id,
        },
      });
      return group;
    }),

  create: publicProcedure
    .input(CreateGroupSchema)
    .mutation(async ({ ctx, input }) => {
      const group = await ctx.prisma.group.create({
        data: {
          input,
        },
      });
      return group;
    }),

  delete: publicProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    const group = await ctx.prisma.group.delete({
      where: {
        id: input,
      },
    });
    return group;
  }),
});
