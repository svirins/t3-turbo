import { Client } from "@planetscale/database";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import { fetch as undiciFetch } from "undici";

dotenv.config();

/* eslint-disable no-var */
declare global {
  var prisma: PrismaClient | undefined;
}

const client = new Client({
  url: process.env.DATABASE_URL!,
  fetch: undiciFetch,
});
const adapter = new PrismaPlanetScale(client);
export const prisma = global.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export * from "@prisma/client";
