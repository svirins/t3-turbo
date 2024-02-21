import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

import { type Location } from "@acme/utils";

const prismaClientSingleton = () => {
  // return new PrismaClient({ log: ["error"] }).$extends(withAccelerate());
  return new PrismaClient({
    log: ["error"],
  })
    .$extends(withAccelerate())
    .$extends({
      model: {
        location: {
          async create(data: {
            id: string;
            latitude: number;
            longitude: number;
          }) {
            const loc: Location = {
              id: data.id,
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
          async findById(data: { id: string }): Promise<Location | null> {
            const result = await prisma.$queryRaw<
              {
                id: string;
                st_x: number | null;
                st_y: number | null;
              }[]
            >`SELECT id, ST_X(coords::geometry), ST_Y(coords::geometry)
            FROM "Location"
            WHERE id = ${data.id}`;
            return {
              id: result[0].id,
              coords: {
                latitude: result[0].st_x,
                longitude: result[0].st_y,
              },
            } as Location;
          },
          async findClosestGroupLocations({
            latitude,
            longitude,
          }: {
            latitude: number;
            longitude: number;
          }) {
            // Query for clostest locations
            const result = await prisma.$queryRaw<
              {
                groupId: string;
                name: string;
                st_x: number | null;
                st_y: number | null;
              }[]
            >`SELECT ST_X(coords::geometry), ST_Y(coords::geometry), "Address"."groupId", "Group"."name"
            FROM "Location"
            INNER JOIN "Address" ON "Location"."addressId" = "Address"."id"
            INNER JOIN "Group" ON "Address"."groupId" = "Group"."id"
            ORDER BY ST_DistanceSphere(coords::geometry, ST_MakePoint(${latitude}, ${longitude})) ASC`;

            // Transform to our custom type
            const locations: Location[] = result.map((data) => {
              return {
                id: data.groupId,
                name: data.name,
                coords: {
                  latitude: data.st_x || 0,
                  longitude: data.st_y || 0,
                },
              };
            });

            // Return data
            return locations;
          },
          async findClosestGroupIds({
            latitude,
            longitude,
          }: {
            latitude: number;
            longitude: number;
          }) {
            // Query for clostest locations
            const result = await prisma.$queryRaw<
              {
                st_x: number | null;
                st_y: number | null;
                groupId: string;
              }[]
            >`SELECT ST_X(coords::geometry), ST_Y(coords::geometry), "Address"."groupId"
            FROM "Location"
            INNER JOIN "Address" ON "Location"."addressId" = "Address"."id"
            ORDER BY ST_DistanceSphere(coords::geometry, ST_MakePoint(${latitude}, ${longitude})) ASC`;
            // Return data
            return result as { groupId: string }[];
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
