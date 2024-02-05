import { PrismaClient } from "@prisma/client";

import { type Location } from "@acme/types";

// import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClientSingleton = () => {
  // return new PrismaClient({ log: ["error"] }).$extends(withAccelerate());
  return new PrismaClient({
    log: ["error"],
  }).$extends({
    model: {
      location: {
        async create(data: {
          id: string;
          name: string;
          latitude: number;
          longitude: number;
        }) {
          const loc: Location = {
            id: data.id,
            name: data.name,
            coords: {
              latitude: data.latitude,
              longitude: data.longitude,
            },
          };
          const point = `POINT(${loc.coords.longitude} ${loc.coords.latitude})`;
          await prisma.$queryRaw`
          INSERT INTO "Location" (id, name, coords) VALUES (${loc.id}, ${loc.name}, ST_GeomFromText(${point}, 4326));
        `;
          return loc;
        },
        async findClosestLocations({
          latitude,
          longitude,
        }: {
          latitude: number;
          longitude: number;
        }) {
          // Query for clostest locations
          const result = await prisma.$queryRaw<
            {
              id: string;
              name: string;
              st_x: number | null;
              st_y: number | null;
            }[]
          >`SELECT id, name, ST_X(coords::geometry), ST_Y(coords::geometry)
            FROM "Location"
            ORDER BY ST_DistanceSphere(coords::geometry, ST_MakePoint(${latitude}, ${longitude})) DESC`;

          // Transform to our custom type
          const locations: Location[] = result.map((data) => {
            return {
              id: data.id,
              name: data.name,
              coords: {
                latitude: data.st_x || 0,
                longitude: data.st_y || 0,
              },
              // addressId: data.addressId,
            };
          });

          // Return data
          return locations;
        },
      },
    },
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// we have to be careful here because we don't want to create a new PrismaClient instance in the API route

// we are exporting global prisma instance here.
// I can be used in every place where we import prisma
export const prisma = globalThis.prisma ?? prismaClientSingleton();

// we are exporting all prisma types here
export * from "@prisma/client";

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
