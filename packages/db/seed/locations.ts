import { PrismaClient } from "@prisma/client";

type Coords = {
  latitude: number;
  longitude: number;
};

type Location = {
  name: string;
  coords: Coords;
};

const prisma = new PrismaClient({
  log: ["error", "query", "info", "warn"],
}).$extends({
  model: {
    location: {
      async create(data: {
        name: string;
        latitude: number;
        longitude: number;
      }) {
        // Create an object using the custom types from above
        const location: Location = {
          name: data.name,
          coords: {
            latitude: data.latitude,
            longitude: data.longitude,
          },
        };

        // Insert the object into the database
        const point = `POINT(${location.coords.longitude} ${location.coords.latitude})`;
        await prisma.$queryRaw`
          INSERT INTO "Location" (name, coords) VALUES (${location.name}, ST_GeomFromText(${point}, 4326));
        `;
        return location;
      },
    },
  },
});
const locations = [
  {
    name: "10ka",
    latitude: 53.89931965195655,
    longitude: 27.602057599054742,
  },
  {
    name: "Polevaya",
    latitude: 53.87412191632889,
    longitude: 27.571667665131763,
  },
  {
    name: "Malina",
    latitude: 53.849863891391294,
    longitude: 27.48657133532942,
  },
  {
    name: "Vyhod",
    latitude: 53.92148904941833,
    longitude: 27.56949674370225,
  },
  {
    name: "Positivka",
    latitude: 53.91642094153588,
    longitude: 27.51224088204882,
  },
];

export async function main() {
  console.log("Start seeding...");
  for (const location of locations) {
    const loc = await prisma.location.create(location);
    console.log(loc);
  }
}

main();
