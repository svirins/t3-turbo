import { z } from "zod";

import { Repeats, WeekDays } from "@acme/utils";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const groupRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const groups = await ctx.prisma.group.findMany({
      include: {
        address: {
          include: {
            location: true,
          },
        },
        days: {
          include: {
            meetings: true,
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
    });
    return groups;
  }),
  allIds: publicProcedure.query(async ({ ctx }) => {
    const groupIds = await ctx.prisma.group.findMany({
      select: {
        id: true,
      },
    });
    return groupIds;
  }),
  allToday: publicProcedure
    .input(
      z.object({
        dayOfWeekFilter: z.nativeEnum(WeekDays),
        repeatsFilter: z.array(z.nativeEnum(Repeats)),
      }),
    )
    .query(async ({ ctx, input }) => {
      const groups = await ctx.prisma.group.findMany({
        where: {
          days: {
            some: {
              name: input.dayOfWeekFilter,
              meetings: {
                some: {
                  repeats: {
                    in: input.repeatsFilter,
                  },
                },
              },
            },
          },
        },
        include: {
          days: {
            where: {
              name: input.dayOfWeekFilter,
            },
            include: {
              meetings: {
                where: {
                  repeats: {
                    in: input.repeatsFilter,
                  },
                },
              },
            },
          },
        },
        orderBy: [{ name: "desc" }],
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
        include: {
          address: {
            include: {
              location: true,
            },
          },
          days: {
            include: {
              meetings: true,
            },
          },
        },
      });
      return group;
    }),

  byName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      const group = await ctx.prisma.group.findUnique({
        where: {
          name: input.name,
        },
        include: {
          address: {
            include: {
              location: true,
            },
          },
          days: {
            include: {
              meetings: true,
            },
          },
        },
      });
      return group;
    }),
});
