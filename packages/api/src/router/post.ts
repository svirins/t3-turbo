import { z } from "zod";

import { CreatePostSchema } from "@acme/validators";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
      orderBy: [{ createdAt: "desc" }],
    });
    return posts;
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findFirst({
        where: {
          id: input.id,
        },
      });
      return post;
    }),

  create: protectedProcedure
    .input(CreatePostSchema)
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          userId: ctx.session.user.id,
        },
      });
      return post;
    }),

  delete: protectedProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return ctx.db.delete(schema.post).where(eq(schema.post.id, input));
  }),
});
