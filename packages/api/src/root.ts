import { groupRouter } from "./router/group";
import { locationRouter } from "./router/location";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  group: groupRouter,
  location: locationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
