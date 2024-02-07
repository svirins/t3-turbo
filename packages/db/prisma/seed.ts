import type { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

import { Repeats, States, Topics, WeekDays } from "@acme/utils";

type SeedLocationData = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

type Location = {
  id: string;
  name: string;
  coords: {
    latitude: number;
    longitude: number;
  };
};

const locations = [
  {
    id: "cls7u33m5000008l8dd9cf4oj",
    name: "10ka",
    latitude: 53.89932147291448,
    longitude: 27.60210846216916,
  },
  {
    id: "cls7u9fdq00000al480osaulw",
    name: "Polevaya",
    latitude: 53.87412191632889,
    longitude: 27.571667665131763,
  },
  {
    id: "cls7u9ym500010al46f3ve1kn",
    name: "Malina",
    latitude: 53.849863891391294,
    longitude: 27.48657133532942,
  },
  {
    id: "cls7uacej00020al40f6hbbap",
    name: "Vyhod",
    latitude: 53.92148904941833,
    longitude: 27.56949674370225,
  },
  {
    id: "cls7uauwv00030al43wye2a8c",
    name: "Positivka",
    latitude: 53.91642094153588,
    longitude: 27.51224088204882,
  },
];

const groupsData = [
  {
    name: "Десятка",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Долгобродская, 10 корпус 2",
        comments: "подъезд №1, цокольный этаж",
        location: {
          connect: {
            id: "cls7u33m5000008l8dd9cf4oj",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.DailyInventarization],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 20, 15, 0, 0),
                end: new Date(2024, 0, 0, 21, 0, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          name: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.SelfAnalysis],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.DailyInventarization],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 10, 0, 0, 0),
                end: new Date(2024, 0, 0, 11, 0, 0, 0),
                topics: [Topics.WeeklyInventarization],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 16, 0, 0, 0),
                end: new Date(2024, 0, 0, 17, 0, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Sunday,
          meetings: {
            create: {
              start: new Date(2024, 0, 0, 16, 0, 0, 0),
              end: new Date(2024, 0, 0, 17, 30, 0, 0),
              topics: [Topics.Sponsorship, Topics.Open],
              repeats: Repeats.Weekly,
            },
          },
        },
      ],
    },
  },
  {
    name: "Выход",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: " ул.В.Хоружей, 18/1",
        comments: "Вход с обратной стороны — второй этаж",
        location: {
          connect: {
            id: "cls7uacej00020al40f6hbbap",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 23, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 59, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Service],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Service],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Service],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 23, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 59, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Relationships],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Relationships],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Relationships],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 23, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 59, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 50, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Speaker],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 23, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 59, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 30, 0, 0),
                end: new Date(2024, 0, 0, 12, 50, 0, 0),
                topics: [Topics.Steps, Topics.Open],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 30, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 20, 0, 0),
                topics: [Topics.Defects],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 21, 0, 0, 0),
                end: new Date(2024, 0, 0, 22, 0, 0),
                topics: [Topics.Defects],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Полевая",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Полевая, 26",
        comments: "цокольный этаж, вход с торца",
        location: {
          connect: {
            id: "cls7u9fdq00000al480osaulw",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 0, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 20, 15, 0, 0),
                end: new Date(2024, 0, 0, 21, 0, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          name: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 20, 30, 0, 0),
                end: new Date(2024, 0, 0, 21, 30, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 20, 30, 0, 0),
                end: new Date(2024, 0, 0, 21, 30, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 20, 0, 0, 0),
                end: new Date(2024, 0, 0, 21, 15, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Even,
              },
              {
                start: new Date(2024, 0, 0, 20, 0, 0, 0),
                end: new Date(2024, 0, 0, 21, 15, 0, 0),
                topics: [Topics.Theme, Topics.Open],
                repeats: Repeats.Odd,
              },
            ],
          },
        },
        {
          name: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 16, 0, 0, 0),
                end: new Date(2024, 0, 0, 17, 0, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Sunday,
          meetings: {
            create: {
              start: new Date(2024, 0, 0, 16, 0, 0, 0),
              end: new Date(2024, 0, 0, 17, 0, 0, 0),
              topics: [Topics.QA],
              repeats: Repeats.Weekly,
            },
          },
        },
      ],
    },
  },
  {
    name: "Позитивка",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул. Бирюзова 4, кабинет 219",
        location: {
          connect: {
            id: "cls7uauwv00030al43wye2a8c",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Monday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Service, Topics.Basics],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Steps],
                repeats: Repeats.Even,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Steps, Topics.Open],
                repeats: Repeats.Odd,
              },
              {
                start: new Date(2024, 0, 0, 20, 15, 0, 0),
                end: new Date(2024, 0, 0, 21, 15, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          name: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.NotLast,
              },
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Sponsorship, Topics.Open],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          name: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 19, 0, 0, 0),
                end: new Date(2024, 0, 0, 20, 10, 0, 0),
                topics: [Topics.Relationships],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 22, 0, 0, 0),
                end: new Date(2024, 0, 0, 23, 10, 0, 0),
                topics: [Topics.Theme],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Saturday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 10, 0, 0),
                topics: [Topics.QA],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 10, 0, 0),
                topics: [Topics.DailyInventarization, Topics.Speaker],
                repeats: Repeats.First,
              },
              {
                start: new Date(2024, 0, 0, 17, 0, 0, 0),
                end: new Date(2024, 0, 0, 18, 10, 0, 0),
                topics: [Topics.DailyMeditation],
                repeats: Repeats.NotFirst,
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Малина",
    address: {
      create: {
        city: "Минск",
        state: States.Minskaya,
        street: "ул Наполеона Орды 47а",
        comments: "Социальный центр 2 этаж к. 208",
        location: {
          connect: {
            id: "cls7u9ym500010al46f3ve1kn",
          },
        },
      },
    },
    days: {
      create: [
        {
          name: WeekDays.Tuesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Steps, Topics.Service],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Wednesday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Basics],
                repeats: Repeats.NotLast,
              },
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Open, Topics.Basics],
                repeats: Repeats.Last,
              },
            ],
          },
        },
        {
          name: WeekDays.Thursday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Traditions],
                repeats: Repeats.Even,
              },
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Speaker],
                repeats: Repeats.Odd,
              },
            ],
          },
        },
        {
          name: WeekDays.Friday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 18, 15, 0, 0),
                end: new Date(2024, 0, 0, 19, 30, 0, 0),
                topics: [Topics.Sponsorship],
                repeats: Repeats.Weekly,
              },
            ],
          },
        },
        {
          name: WeekDays.Sunday,
          meetings: {
            create: [
              {
                start: new Date(2024, 0, 0, 11, 15, 0, 0),
                end: new Date(2024, 0, 0, 12, 30, 0, 0),
                topics: [Topics.LivingClean],
                repeats: Repeats.Weekly,
              },
              {
                start: new Date(2024, 0, 0, 12, 45, 0, 0),
                end: new Date(2024, 0, 0, 14, 15, 0, 0),
                topics: [Topics.Work],
                repeats: Repeats.First,
              },
            ],
          },
        },
      ],
    },
  },
];

// https://www.prisma.io/docs/orm/prisma-client/queries/raw-database-access/custom-and-type-safe-queries

// const prisma = new PrismaClient({
//   log: ["error", "query", "info", "warn"],
// }).$extends({
//   model: {
//     location: {
//       async create(data: {
//         id: string;
//         name: string;
//         latitude: number;
//         longitude: number;
//       }) {
//         const loc: Location = {
//           id: data.id,
//           name: data.name,
//           coords: {
//             latitude: data.latitude,
//             longitude: data.longitude,
//           },
//         };
//         const point = `POINT(${loc.coords.latitude} ${loc.coords.longitude})`;
//         await prisma.$queryRaw`
//           INSERT INTO "Location" (id, name, coords) VALUES (${loc.id}, ${loc.name}, ST_GeomFromText(${point}, 4326));
//         `;
//         return loc;
//       },
//     },
//   },
// });
// async function seedLocation(locations: SeedLocationData[]) {
//   for (const seedElement of locations) {
//     try {
//       const result = await prisma.location.create(seedElement);
//       console.log("Created group: ", result);
//     } catch (error) {
//       console.error("Error creating group: ", error);
//     }
//   }
// }
// (async () => {
//   console.log("Seeding locations...");
//   await seedLocation(locations);
// })();

const prisma = new PrismaClient({
  log: ["error", "query", "info", "warn"],
});
async function createGroup(data: Prisma.GroupCreateInput) {
  return prisma.group.create({ data });
}
async function seedGroups(groupsData: Prisma.GroupCreateInput[]) {
  for (const seedElement of groupsData) {
    try {
      const result = await createGroup(seedElement);
      console.log("Created group: ", result);
    } catch (error) {
      console.error("Error creating group: ", error);
    }
  }
}
(async () => {
  console.log("Seeding groups...");
  await seedGroups(groupsData);
})();
