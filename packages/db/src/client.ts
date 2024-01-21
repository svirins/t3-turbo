import { Client } from "@planetscale/database";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import { fetch as undiciFetch } from "undici";

dotenv.config();

const client = new Client({
  url: process.env.DATABASE_URL!,
  fetch: undiciFetch,
});
const adapter = new PrismaPlanetScale(client);
export const prisma = new PrismaClient({ adapter });

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// export const prisma = global.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export * from "@prisma/client";
